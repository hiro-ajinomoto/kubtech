package twocheckout

import (
	"crypto/hmac"
	"crypto/md5"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"net/url"
	"strings"
)

func GetSignature(key string, data []byte) string {
	h := hmac.New(sha256.New, []byte(key))

	// Write Data to it
	h.Write(data)

	// Get result and encode as hexadecimal string
	return hex.EncodeToString(h.Sum(nil))
}
func GetChecksum(key string, data []byte) string {
	h := hmac.New(md5.New, []byte(key))

	// Write Data to it
	h.Write(data)

	// Get result and encode as hexadecimal string
	return hex.EncodeToString(h.Sum(nil))
}

func VerifyChecksum(secretKey string, paramStr string) bool {
	params := strings.Split(paramStr, "&")

	// Rebuild URL that sorted by params to calculate checksum.
	requestChecksum := ""
	signatureInput := ""
	for _, param := range params {
		p := strings.Split(param, "=")
		key := p[0]
		value, _ := url.QueryUnescape(p[1])
		if key == "HASH" {
			requestChecksum = value
		}

		if len(value) == 0 {
			signatureInput += fmt.Sprintf("%d", 0)
		} else {
			signatureInput += fmt.Sprintf("%d%s", len(value), value)
		}
	}

	computedChecksum := GetChecksum(secretKey, []byte(signatureInput))
	return computedChecksum == requestChecksum
}
