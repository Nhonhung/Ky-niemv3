"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ParticleBackground from "@/components/particle-background"

export default function MessagesPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const messages = [
    {
      id: 1,
      name: "Phạm Lê Thái An",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      message:
        "Cảm ơn các bạn đã cho mình những kỷ niệm tuyệt vời. Mong rằng tình bạn của chúng ta sẽ mãi bền vững theo thời gian.",
    },
    {
      id: 2,
      name: "Hoàng Phương Anh",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      message:
        "Ba năm học cùng nhau, biết bao kỷ niệm vui buồn. Dù mai này có đi đâu, mình vẫn luôn nhớ về lớp 9A1 thân yêu.",
    },
    {
      id: 3,
      name: "Phạm Ngọc Khánh Băng",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      message:
        "Mỗi ngày đến lớp là một niềm vui. Cảm ơn các bạn đã luôn bên cạnh, động viên và giúp đỡ mình trong suốt thời gian qua.",
    },
    {
      id: 4,
      name: "Nguyễn Phúc Chương",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      message:
        "Lớp 9A1 - nơi cho mình những người bạn tuyệt vời nhất. Mong rằng sau này chúng ta vẫn sẽ giữ liên lạc và gặp lại nhau.",
    },
    {
      id: 5,
      name: "Lê Vũ Thế Dân",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      message:
        "Những năm tháng học trò sẽ mãi là kỷ niệm đẹp trong lòng mình. Chúc các bạn luôn thành công và hạnh phúc trên con đường mình đã chọn.",
    },
    {
      id: 6,
      name: "Đoàn Phương Thùy Dung",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg ",
      message:
        "Cảm ơn thầy cô và các bạn đã tạo nên một môi trường học tập thân thiện và đầy ắp tiếng cười. Mình sẽ nhớ mãi những kỷ niệm này.",
    },
    {
      "id": 7,
      "name": "Nguyễn Minh Đức",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Nhớ những buổi học nhóm, những lần cùng nhau giải bài tập khó. Cảm ơn các bạn đã luôn đồng hành cùng mình."
    },
    {
      "id": 8,
      "name": "Nguyễn Tất Giỏi",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Lớp 9A1 là gia đình thứ hai của mình. Chúc mọi người luôn vui vẻ và thành công trong tương lai."
    },
    {
      "id": 9,
      "name": "Phạm Thị Thanh Hiền",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Những giờ ra chơi, những câu chuyện cười không dứt, tất cả sẽ mãi là ký ức đẹp trong lòng mình."
    },
    {
      "id": 10,
      "name": "Khương Thị Như Huệ",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Cảm ơn các bạn đã làm cho những ngày tháng học trò của mình trở nên ý nghĩa và đáng nhớ."
    },
    {
      "id": 11,
      "name": "Hồ Hoàng Huy",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Dù thời gian có trôi qua, mình tin rằng tình bạn của chúng ta sẽ luôn bền chặt như ngày đầu."
    },
    {
      "id": 12,
      "name": "Nguyễn Văn Huy",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Nhớ những lần cùng nhau ôn thi, dù mệt nhưng vẫn đầy niềm vui. Cảm ơn các bạn rất nhiều."
    },
    {
      "id": 13,
      "name": "Trần Quang Huy",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Chúc các bạn lớp 9A1 luôn tự tin bước đi trên con đường mình chọn. Mình sẽ luôn ủng hộ các bạn."
    },
    {
      "id": 14,
      "name": "Nguyễn Thanh Huyền",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Cảm ơn thầy cô đã luôn kiên nhẫn dạy dỗ, cảm ơn các bạn đã luôn sẻ chia niềm vui nỗi buồn."
    },
    {
      "id": 15,
      "name": "Trần Hữu Hường",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Những kỷ niệm bên lớp 9A1 là kho báu quý giá nhất của mình. Mong một ngày được gặp lại tất cả."
    },
    {
      "id": 16,
      "name": "Nguyễn Duy Khang",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Cảm ơn các bạn đã giúp mình vượt qua những lúc khó khăn. Tình bạn này mình sẽ mãi trân trọng."
    },
    {
      "id": 17,
      "name": "Mã Thị Hồng Lệ",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Nhớ những buổi sinh hoạt lớp, những trò đùa khiến cả lớp cười nghiêng ngả. Thật tuyệt vời!"
    },
    {
      "id": 18,
      "name": "Lê Thị Mỹ Ly",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Chúc các bạn luôn giữ được nụ cười rạng rỡ và tinh thần lạc quan như những ngày còn bên nhau."
    },
    {
      "id": 19,
      "name": "Trần Thị Khánh Ly",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Lớp 9A1 đã cho mình những bài học quý giá về tình bạn và sự đoàn kết. Cảm ơn tất cả."
    },
    {
      "id": 20,
      "name": "Đào Văn Minh",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Dù mai này có xa cách, mình hy vọng chúng ta vẫn sẽ nhớ về nhau và những ngày tháng đẹp đẽ này."
    },
    {
      "id": 21,
      "name": "Lê Hoàng Thanh Ngân",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Cảm ơn các bạn đã luôn khiến mình cảm thấy được yêu thương và thuộc về một tập thể tuyệt vời."
    },
    {
      "id": 22,
      "name": "Nguyễn Thị Bích Ngọc",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Những buổi văn nghệ, những lần cùng nhau tập luyện, tất cả đều là những kỷ niệm không thể quên."
    },
    {
      "id": 23,
      "name": "Nguyễn Thị Thúy Nhi",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Chúc các bạn luôn mạnh mẽ, kiên trì và đạt được mọi ước mơ trong cuộc sống."
    },
    {
      "id": 24,
      "name": "Phạm Ngọc Linh Nhi",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Cảm ơn thầy cô đã truyền cảm hứng, cảm ơn các bạn đã làm nên tuổi học trò rực rỡ của mình."
    },
    {
      "id": 25,
      "name": "Nguyễn Khả Gia Như",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Nhớ những ngày cùng nhau chạy deadline bài tập, dù áp lực nhưng vẫn đầy ắp tiếng cười."
    },
    {
      "id": 26,
      "name": "Nguyễn Thị Bảo Ny",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Lớp 9A1 là nơi mình học được cách sẻ chia và trân trọng những điều nhỏ bé trong cuộc sống."
    },
    {
      "id": 27,
      "name": "Lê Quý Hồng Quân",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Cảm ơn các bạn đã luôn động viên mình, giúp mình tự tin hơn trong những ngày tháng học trò."
    },
    {
      "id": 28,
      "name": "Trần Đăng Quân",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Chúc các bạn luôn giữ được ngọn lửa nhiệt huyết và đạt được mọi mục tiêu trong tương lai."
    },
    {
      "id": 29,
      "name": "Lê Xuân Sơn",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Những kỷ niệm bên lớp 9A1 sẽ mãi là ánh sáng dẫn đường cho mình trong những ngày tháng sau này."
    },
    {
      "id": 30,
      "name": "Hồ Thanh Thảo",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Cảm ơn các bạn đã làm cho mỗi ngày đi học đều trở thành một ngày đáng mong chờ."
    },
    {
      "id": 31,
      "name": "Huỳnh Đặng Phương Thảo",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Nhớ những lần cùng nhau tổ chức sinh nhật, những khoảnh khắc ấm áp mà mình sẽ mãi ghi nhớ."
    },
    {
      "id": 32,
      "name": "Bùi Minh Thắng",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Chúc các bạn luôn hạnh phúc và thành công, dù có đi đến bất kỳ đâu trên thế giới này."
    },
    {
      "id": 33,
      "name": "Huỳnh Gia Thịnh",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Lớp 9A1 đã dạy mình rằng tình bạn chân thành có thể vượt qua mọi thử thách của thời gian."
    },
    {
      "id": 34,
      "name": "Nguyễn Thị Thu Thủy",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Cảm ơn các bạn đã luôn ở bên, cùng mình tạo nên những kỷ niệm không thể nào quên."
    },
    {
      "id": 35,
      "name": "Nguyễn Hồ Nhã Thy",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Nhớ những buổi học thêm, những lần cùng nhau vượt qua áp lực thi cử. Các bạn thật tuyệt!"
    },
    {
      "id": 36,
      "name": "Trần Thùy Trang",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Chúc các bạn luôn giữ được sự hồn nhiên và niềm vui như những ngày chúng ta còn bên nhau."
    },
    {
      "id": 37,
      "name": "Lê Quỳnh Trâm",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Cảm ơn lớp 9A1 đã cho mình những người bạn thân thiết, những kỷ niệm đẹp mãi không phai."
    },
    {
      "id": 38,
      "name": "Nguyễn Ánh Ngọc Trâm",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Dù mai này có ra sao, mình sẽ luôn tự hào khi nhớ về những ngày tháng ở lớp 9A1."
    },
    {
      "id": 39,
      "name": "Nguyễn Bảo Trâm",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Cảm ơn các bạn đã làm cho tuổi học trò của mình trở thành một hành trình đầy màu sắc."
    },
    {
      "id": 40,
      "name": "Nguyễn Hoàng Nhã Trúc",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Nhớ những lần cùng nhau tham gia hoạt động trường, những khoảnh khắc đoàn kết đáng quý."
    },
    {
      "id": 41,
      "name": "Trương Thị Phương Uyên",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Chúc các bạn luôn tìm thấy niềm vui trong cuộc sống và thành công trong mọi điều các bạn làm."
    },
    {
      "id": 42,
      "name": "Nguyễn Đình Uy Vũ",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Lớp 9A1 là nơi mình học được ý nghĩa của tình bạn và lòng biết ơn. Cảm ơn tất cả."
    },
    {
      "id": 43,
      "name": "Phan Lê Ngọc Vũ",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Cảm ơn các bạn đã luôn làm mình cười, ngay cả trong những ngày khó khăn nhất."
    },
    {
      "id": 44,
      "name": "Đoàn Ngô Uyển Vy",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Nhớ những buổi picnic, những lần cùng nhau khám phá và tạo nên kỷ niệm đáng nhớ."
    },
    {
      "id": 45,
      "name": "Lê Trương Như Ý",
      "nickname": "Học sinh",
      "avatar": "/Imagehs/had.jpg",
      "message": "Chúc các bạn luôn giữ được trái tim ấm áp và tinh thần lạc quan như những ngày xưa."
    },
    {
      "id": 46,
      "name": "Phạm Đức Thịnh",
      "nickname": " ZLS",
      "avatar": "/Imagehs/ZLS6.jpeg",
      "message": "Huge thanks for creating this amazing website a time capsule for the best memories of class 9A1"
    },
    {
      "id": 47,
      "name": "LEAK T A",
      "nickname": "L T A",
      "avatar": "/Imagehs/ZLS7.jpeg",
      "message": "HTML may build the structure, but you're the one who gave this website its soul."
    },
    {
      "id": 48,
      "name": "LEAK T A",
      "nickname": "ZLS & L T A",
      "avatar": "/Imagehs/ZLS7.jpeg",
      "message": "Wishing you many awesome projects ahead and may the bugs always stay far away from your code!"
    }, 
  ]

  const handleCardFlip = (id: number) => {
    if (flippedCard === id) {
      setFlippedCard(null)
    } else {
      setFlippedCard(id)
    }
  }

  return (
    <main className="min-h-screen pt-20 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Lưu Bút Kỷ Niệm
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative h-80 cursor-pointer perspective-1000`}
              onClick={() => handleCardFlip(item.id)}
            >
              <div
                className={`absolute inset-0 transition-transform duration-700 transform-style-3d ${
                  flippedCard === item.id ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-800/70 to-pink-700/70 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center border border-purple-500/30">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white/50">
                    <img
                      src={item.avatar || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-purple-200 mb-4">"{item.nickname}"</p>
                  <p className="text-white/70 text-sm italic">Nhấp để xem lời nhắn</p>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-pink-700/70 to-purple-800/70 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center border border-purple-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">Lời nhắn</h3>
                  <p className="text-purple-100 text-center italic">"{item.message}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
