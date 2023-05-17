package payoo

import (
	"crypto/sha512"
	"encoding/hex"
	"strings"
)

func GetChecksum(key string, data string) string {
	h2 := sha512.New()
	h2.Write([]byte(key + data))
	return hex.EncodeToString(h2.Sum(nil))
}

func VerifyChecksum(key string, data string, payooIp string, checksum string) bool {
	h2 := sha512.New()
	h2.Write([]byte(key + data + payooIp))
	return hex.EncodeToString(h2.Sum(nil)) == strings.ToLower(checksum)
}
