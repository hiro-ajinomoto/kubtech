package vnpay

import (
	"crypto/hmac"
	"crypto/sha512"
	"encoding/hex"
	"net/url"
	"sort"
)

func GetChecksum(key string, data []byte) string {
	h := hmac.New(sha512.New, []byte(key))

	// Write Data to it
	h.Write([]byte(data))

	// Get result and encode as hexadecimal string
	return hex.EncodeToString(h.Sum(nil))
}

func VerifyChecksum(key string, params map[string]string) bool {
	requestChecksum, ok := params["vnp_SecureHash"]
	if !ok {
		return false
	}
	delete(params, "vnp_SecureHashType")
	delete(params, "vnp_SecureHash")

	// Sort params by name.
	fieldNames := make([]string, 0, len(params))
	for k := range params {
		fieldNames = append(fieldNames, k)
	}
	sort.Strings(fieldNames)

	// Rebuild URL that sorted by params to calculate checksum.
	kv := url.Values{}
	for _, fieldName := range fieldNames {
		fieldValue := params[fieldName]
		if fieldValue != "" {
			kv.Add(fieldName, fieldValue)
		}
	}

	computedChecksum := GetChecksum(key, []byte(kv.Encode()))
	return computedChecksum == requestChecksum
}
