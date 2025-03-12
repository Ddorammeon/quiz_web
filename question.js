const questions = [
  // Nhóm 1: Đúng/Sai (10 câu)
  {
    type: "trueFalse",
    question: "Câu 1: Trái đất quay quanh Mặt trời?",
    options: ["Đúng", "Sai"],
    answer: "Đúng",
  },
  {
    type: "trueFalse",
    question: "Câu 2: Nước sôi ở 100°C ở mọi điều kiện áp suất?",
    options: ["Đúng", "Sai"],
    answer: "Sai",
  },
  {
    type: "trueFalse",
    question: "Câu 3: Cá heo là một loài cá?",
    options: ["Đúng", "Sai"],
    answer: "Sai",
  },
  {
    type: "trueFalse",
    question: "Câu 4: Con người chỉ sử dụng 10% não bộ?",
    options: ["Đúng", "Sai"],
    answer: "Sai",
  },
  {
    type: "trueFalse",
    question: "Câu 5: Việt Nam có đường biên giới giáp với Lào?",
    options: ["Đúng", "Sai"],
    answer: "Đúng",
  },
  {
    type: "trueFalse",
    question: "Câu 6: Điện được tạo ra từ năng lượng hạt nhân?",
    options: ["Đúng", "Sai"],
    answer: "Đúng",
  },
  {
    type: "trueFalse",
    question: "Câu 7: Albert Einstein là người phát minh ra bóng đèn?",
    options: ["Đúng", "Sai"],
    answer: "Sai",
  },
  {
    type: "trueFalse",
    question: "Câu 8: Nước biển có vị ngọt?",
    options: ["Đúng", "Sai"],
    answer: "Sai",
  },
  {
    type: "trueFalse",
    question: "Câu 9: Kim cương là chất dẫn điện tốt?",
    options: ["Đúng", "Sai"],
    answer: "Sai",
  },
  {
    type: "trueFalse",
    question: "Câu 10: Nhiệt độ 0°C tương đương với 273.15K?",
    options: ["Đúng", "Sai"],
    answer: "Đúng",
  },

  // Nhóm 2: Chọn 1 trong 4 đáp án (10 câu)
  {
    type: "multipleChoice",
    question: "Câu 11: Thủ đô của Pháp là gì?",
    options: ["Berlin", "Madrid", "Paris", "London"],
    answer: "Paris",
  },
  {
    type: "multipleChoice",
    question: "Câu 12: Nguyên tố hóa học nào có ký hiệu 'O'?",
    options: ["Vàng", "Oxy", "Nitơ", "Hydro"],
    answer: "Oxy",
  },
  {
    type: "multipleChoice",
    question: "Câu 13: Ai là tác giả của 'Truyện Kiều'?",
    options: ["Hồ Xuân Hương", "Nguyễn Trãi", "Nguyễn Du", "Tố Hữu"],
    answer: "Nguyễn Du",
  },
  {
    type: "multipleChoice",
    question: "Câu 14: Hệ điều hành nào được phát triển bởi Microsoft?",
    options: ["MacOS", "Linux", "Windows", "Android"],
    answer: "Windows",
  },
  {
    type: "multipleChoice",
    question: "Câu 15: Quốc gia nào có diện tích lớn nhất thế giới?",
    options: ["Mỹ", "Trung Quốc", "Nga", "Canada"],
    answer: "Nga",
  },
  {
    type: "multipleChoice",
    question: "Câu 16: Ai là người đầu tiên đặt chân lên Mặt Trăng?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Elon Musk"],
    answer: "Neil Armstrong",
  },
  {
    type: "multipleChoice",
    question: "Câu 17: Động vật nào được coi là chúa sơn lâm?",
    options: ["Hổ", "Sư tử", "Báo", "Chó sói"],
    answer: "Sư tử",
  },
  {
    type: "multipleChoice",
    question: "Câu 18: Ngày Quốc Khánh Việt Nam là ngày nào?",
    options: ["30/4", "19/5", "2/9", "1/1"],
    answer: "2/9",
  },
  {
    type: "multipleChoice",
    question: "Câu 19: Trong hệ Mặt Trời, hành tinh nào lớn nhất?",
    options: ["Trái Đất", "Sao Kim", "Sao Mộc", "Sao Thủy"],
    answer: "Sao Mộc",
  },
  {
    type: "multipleChoice",
    question: "Câu 20: Kim loại nào có độ dẫn điện tốt nhất?",
    options: ["Vàng", "Nhôm", "Đồng", "Bạc"],
    answer: "Bạc",
  },
  // Nhóm 3: Chọn nhiều đáp án (10 câu)
  {
    type: "multiSelect",
    question:
      "Câu 21: Những ngôn ngữ lập trình phổ biến nào được sử dụng để phát triển web?",
    options: ["Python", "JavaScript", "C++", "HTML"],
    answer: ["Python", "JavaScript", "HTML"],
  },
  {
    type: "multiSelect",
    question: "Câu 22: Những nguyên tố nào có trong nước?",
    options: ["Oxy", "Hydro", "Nitơ", "Carbon"],
    answer: ["Oxy", "Hydro"],
  },
  {
    type: "multiSelect",
    question: "Câu 23: Những quốc gia nào thuộc châu Á?",
    options: ["Việt Nam", "Canada", "Nhật Bản", "Ấn Độ"],
    answer: ["Việt Nam", "Nhật Bản", "Ấn Độ"],
  },
  {
    type: "multiSelect",
    question: "Câu 24: Những hệ điều hành nào dành cho điện thoại?",
    options: ["Windows", "Android", "iOS", "Linux"],
    answer: ["Android", "iOS"],
  },
  {
    type: "multiSelect",
    question: "Câu 25: Những loài động vật nào là động vật có vú?",
    options: ["Cá heo", "Cá mập", "Hổ", "Chim cánh cụt"],
    answer: ["Cá heo", "Hổ"],
  },
  {
    type: "multiSelect",
    question: "Câu 26: Những môn thể thao nào sử dụng bóng?",
    options: ["Bóng đá", "Bơi lội", "Bóng rổ", "Cầu lông"],
    answer: ["Bóng đá", "Bóng rổ", "Cầu lông"],
  },
  {
    type: "multiSelect",
    question: "Câu 27: Những nhà khoa học nào từng nhận giải Nobel?",
    options: ["Albert Einstein", "Isaac Newton", "Marie Curie", "Nikola Tesla"],
    answer: ["Albert Einstein", "Marie Curie"],
  },
  {
    type: "multiSelect",
    question: "Câu 28: Những quốc gia nào sử dụng đồng Euro?",
    options: ["Pháp", "Anh", "Đức", "Ý"],
    answer: ["Pháp", "Đức", "Ý"],
  },
  {
    type: "multiSelect",
    question: "Câu 29: Những loại thực phẩm nào là rau củ?",
    options: ["Cà rốt", "Táo", "Khoai tây", "Rau cải"],
    answer: ["Cà rốt", "Khoai tây", "Rau cải"],
  },
  {
    type: "multiSelect",
    question: "Câu 30: Những tác phẩm nào là của Shakespeare?",
    options: ["Romeo và Juliet", "Tam Quốc Diễn Nghĩa", "Hamlet", "Macbeth"],
    answer: ["Romeo và Juliet", "Hamlet", "Macbeth"],
  },

  // Nhóm 4: Tự luận (10 câu)
  {
    type: "essay",
    question: "Câu 31: Hãy mô tả một ngày làm việc hiệu quả của bạn?",
    answer: " ",
  },
  {
    type: "essay",
    question: "Câu 32: Bạn nghĩ gì về tầm quan trọng của giáo dục?",
    answer: " ",
  },
  {
    type: "essay",
    question: "Câu 33: Hãy viết một đoạn văn về sở thích của bạn?",
    answer: " ",
  },
  {
    type: "essay",
    question: "Câu 34: Theo bạn, làm thế nào để bảo vệ môi trường?",
    answer: " ",
  },
  {
    type: "essay",
    question: "Câu 35: Bạn mong muốn điều gì trong tương lai?",
    answer: " ",
  },
  {
    type: "essay",
    question: "Câu 36: Hãy kể về một kỷ niệm đáng nhớ của bạn?",
    answer: " ",
  },
  {
    type: "essay",
    question: "Câu 37: Bạn sẽ làm gì nếu trở thành nhà lãnh đạo?",
    answer: " ",
  },
  {
    type: "essay",
    question: "Câu 38: Hãy nêu ý kiến của bạn về công nghệ AI?",
    answer: " ",
  },
  {
    type: "essay",
    question: "Câu 39: Tại sao cần giữ gìn sức khỏe?",
    answer: " ",
  },
  {
    type: "essay",
    question: "Câu 40: Hãy viết một bài luận ngắn về lòng biết ơn?",
    answer: " ",
  },
];
localStorage.setItem("questions", JSON.stringify(questions));
