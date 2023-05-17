package onepay

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"sort"
	"strings"
)

func GetChecksum(key string, data []byte) string {
	keyDecoded, _ := hex.DecodeString(key)
	h := hmac.New(sha256.New, keyDecoded)
	// Write Data to it
	h.Write([]byte(data))
	// Get result and encode as hexadecimal string
	return strings.ToUpper(hex.EncodeToString(h.Sum(nil)))
}

func VerifyChecksum(key string, params map[string]string) bool {
	requestChecksum, ok := params["vpc_SecureHash"]
	if !ok {
		return false
	}
	delete(params, "vpc_SecureHash")

	fieldNames := make([]string, 0, len(params))
	for k := range params {
		fieldNames = append(fieldNames, k)
	}
	sort.Strings(fieldNames)
	var hashDataStr string
	for _, fieldName := range fieldNames {
		fieldValue := params[fieldName]
		if strings.HasPrefix(fieldName, "vpc_") || strings.HasPrefix(fieldName, "user_") {
			hashDataStr = hashDataStr + (fieldName + "=" + fieldValue + "&")
		}
	}
	hashDataStr = strings.TrimRight(hashDataStr, "&")
	computedChecksum := GetChecksum(key, []byte(hashDataStr))
	return computedChecksum == requestChecksum
}
