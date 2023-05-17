package helpers

import (
	"bytes"
	"encoding/gob"
)

func DeepCopy(src, dist interface{}) (err error) {
	buf := bytes.Buffer{}
	if err = gob.NewEncoder(&buf).Encode(src); err != nil {
		return
	}
	return gob.NewDecoder(&buf).Decode(dist)
}

// Luồng xử lý của hàm bao gồm các bước sau:

// 1. Tạo một đối tượng "bytes.Buffer" để lưu trữ dữ liệu của đối tượng gốc.
// 2. Sử dụng "gob.NewEncoder" để mã hóa đối tượng gốc và lưu trữ kết quả vào đối tượng "bytes.Buffer".
// 3. Kiểm tra xem quá trình mã hóa có thành công hay không. Nếu có lỗi, hàm sẽ trả về lỗi và kết thúc.
// 4. Sử dụng "gob.NewDecoder" để giải mã dữ liệu từ đối tượng "bytes.Buffer" và lưu trữ kết quả vào đối tượng được sao chép.
// 5. Trả về đối tượng được sao chép.

// Ưu điểm của hàm "DeepCopy" là nó cho phép bạn tạo một bản sao của một đối tượng mà không ảnh hưởng đến đối tượng gốc.
// Tuy nhiên, hàm này cũng có một số nhược điểm,
// bao gồm việc nó chỉ hoạt động với các đối tượng có thể được mã hóa và giải mã bằng gói "encoding/gob",
// và việc sao chép đối tượng có thể tốn nhiều tài nguyên hơn so với việc tạo một tham chiếu đến đối tượng gốc.
