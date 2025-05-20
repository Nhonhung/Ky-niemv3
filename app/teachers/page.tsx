"use client"

import { motion } from "framer-motion"
import { MessageSquare, Quote } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function TeachersPage() {
  // Sample teachers messages data
  const teachersMessages = [
    {
      id: 1,
      name: "Cô Xinh",
      role: "Giáo viên chủ nhiệm",
      subject: "Tiếng Anh",
      avatar: "/Imagehs/had.jpg",
      message:
        "Các em thân mến, bốn năm đồng hành cùng các em là khoảng thời gian đáng nhớ trong sự nghiệp giảng dạy của cô. Cô đã chứng kiến sự trưởng thành của các em từng ngày, từ những cô cậu học sinh còn bỡ ngỡ ngày đầu vào lớp 6 đến những thanh niên, thiếu nữ trưởng thành, tự tin ngày hôm nay. Cô tin rằng, với nền tảng kiến thức, kỹ năng và phẩm chất đã được rèn luyện, các em sẽ vững bước trên con đường phía trước, dù có khó khăn, thử thách. Hãy luôn giữ vững niềm tin, sự lạc quan và tinh thần đoàn kết như những gì các em đã thể hiện trong suốt thời gian qua. Cô luôn tự hào về các em, lớp 9A1 thân yêu của cô!",
          videoUrl: "https://www.youtube.com/embed/j3KCob5TbMk?si=K_Pz-aLuSKEs7W27",
    },
    {
      id: 2,
      name: "Cô Tuyên",
      role: "Giáo viên bộ môn",
      subject: "Hóa Học",
      avatar: "/Imagehs/had.jpg",
      message:
        "Các em học sinh lớp 9A1 thân mến, thầy rất vui khi được dạy các em môn Toán trong suốt ba năm qua. Thầy đã chứng kiến sự nỗ lực, cố gắng của các em trong việc chinh phục môn học được xem là khó nhưng cũng rất quan trọng này. Nhiều em đã có những tiến bộ vượt bậc, từ những bài kiểm tra đầu tiên còn nhiều lúng túng đến những thành tích đáng nể trong các kỳ thi học sinh giỏi. Thầy tin rằng, dù các em có theo đuổi ngành nghề nào trong tương lai, những kỹ năng tư duy logic, phân tích và giải quyết vấn đề mà các em đã rèn luyện qua môn Toán sẽ là hành trang quý giá. Chúc các em luôn thành công và hạnh phúc trên con đường phía trước!",
    },
    {
      id: 3,
      name: "Thầy Dũng",
      role: "Giáo viên bộ môn",
      subject: "TNHN",
      avatar: "/Imagehs/had.jpg",
      message:
        "Các em thân mến, bốn năm đồng hành cùng các em là khoảng thời gian đáng nhớ trong sự nghiệp giảng dạy của cô. Cô đã chứng kiến sự trưởng thành của các em từng ngày, từ những cô cậu học sinh còn bỡ ngỡ ngày đầu vào lớp 6 đến những thanh niên, thiếu nữ trưởng thành, tự tin ngày hôm nay. Cô tin rằng, với nền tảng kiến thức, kỹ năng và phẩm chất đã được rèn luyện, các em sẽ vững bước trên con đường phía trước, dù có khó khăn, thử thách. Hãy luôn giữ vững niềm tin, sự lạc quan và tinh thần đoàn kết như những gì các em đã thể hiện trong suốt thời gian qua. Cô luôn tự hào về các em, lớp 9A1 thân yêu của cô!",
    },
    {
      id: 4,
      name: "Thầy Lâm",
      role: "Giáo viên bộ môn",
      subject: "Mĩ Thuật",
      avatar: "/Imagehs/had.jpg",
      message:
        "Các em lớp 9A1 thân mến, thầy rất tự hào khi thấy các em không ngừng tiến bộ trong môn Mĩ Thuật. Từ những nét vẽ đầu tiên đến các tác phẩm đầy sáng tạo, các em đã thể hiện sự chăm chỉ và óc thẩm mỹ đáng quý. Thầy tin rằng khả năng quan sát, tưởng tượng và cảm nhận cái đẹp sẽ luôn là hành trang quý báu trong cuộc sống của các em. Chúc các em luôn tự tin và sáng tạo trên con đường phía trước!"
    
    },
    {
      id: 5,
      name: "Cô Phượng",
      role: "Giáo viên bộ môn",
      subject: "Âm Nhạc",
      avatar: "/Imagehs/had.jpg",
      message:
        "Các em học sinh yêu quý, cô rất vui và tự hào khi được đồng hành cùng các em trong hành trình khám phá thế giới âm nhạc. Từng giai điệu, từng tiết tấu các em thể hiện là minh chứng cho niềm đam mê và sự cố gắng không ngừng. Cô mong rằng âm nhạc sẽ mãi là người bạn đồng hành, mang lại niềm vui và nguồn cảm hứng trong cuộc sống. Chúc các em luôn rực rỡ và thành công!"
   
    },
    {
      id: 6,
      name: "Cô Giang",
      role: "Giáo viên bộ môn",
      subject: "Toán Học",
      avatar: "/Imagehs/had.jpg",
      message:
        "Các em lớp 9A1, thầy rất vui khi được dạy các em môn Toán. Sự chăm chỉ và tư duy logic của các em đã mang lại nhiều kết quả đáng tự hào. Thầy tin rằng những kỹ năng giải quyết vấn đề các em học được sẽ là hành trang quý giá. Chúc các em luôn tự tin tiến về phía trước!"
    },
    {
      id: 7,
      name: "Thầy Hưng",
      role: "Giáo viên bộ môn",
      subject: "Sinh Học",
      avatar: "/Imagehs/had.jpg",
      message:
        "Các em thân mến, cô rất ấn tượng với sự tò mò của các em khi khám phá thế giới sinh vật. Từ những bài học về tế bào đến hệ sinh thái, các em đã cho cô thấy tinh thần học hỏi không ngừng. Cô chúc các em luôn khỏe mạnh và thành công trong mọi lĩnh vực!"
    },
    {
      id: 8,
      name: "Thầy Trung",
      role: "Giáo viên bộ môn",
      subject: "Vật Lý",
      avatar: "/Imagehs/had.jpg",
      message:
        "Các em lớp 9A1 thân mến, thầy rất tự hào khi thấy các em ngày càng yêu thích và hiểu sâu hơn về môn Vật Lý. Từ những hiện tượng đơn giản trong cuộc sống đến các quy luật tự nhiên phức tạp, các em đã cho thấy sự tò mò, tư duy logic và tinh thần học hỏi đáng quý. Thầy mong rằng kiến thức Vật Lý sẽ giúp các em khám phá thế giới xung quanh một cách khoa học và sáng tạo. Chúc các em luôn tiến bộ và gặt hái nhiều thành công!"   
    },
    {
      id: 9,
      name: "Cô Hoàng",
      role: "Giáo viên bộ môn",
      subject: "Địa Lý",
      avatar: "/Imagehs/had.jpg",
      message:
        "Các em yêu quý, cô rất vui khi thấy các em say mê tìm hiểu về trái đất qua môn Địa Lý. Từ bản đồ, khí hậu đến văn hóa các nước, các em đã thể hiện sự tò mò đáng quý. Cô chúc các em luôn khám phá thế giới với tâm hồn rộng mở!"
    },
    {
      id: 10,
      name: "Cô Thu",
      role: "Giáo viên bộ môn",
      subject: "Lịch Sử",
      avatar: "/Imagehs/had.jpg",
      message:
        "Các em lớp 9A1, thầy rất tự hào khi thấy các em yêu thích môn Lịch Sử. Những bài học về quá khứ không chỉ là kiến thức, mà còn là bài học về lòng tự hào dân tộc. Thầy mong các em sẽ mang tinh thần kiên cường ấy vào tương lai. Chúc các em thành công!"        
    },
    {
      id: 11,
      name: "Thầy Hiện",
      role: "Giáo viên bộ môn",
      subject: "Công Nghệ",
      avatar: "/Imagehs/had.jpg",
      message:
        "Các em lớp 9A1, thầy rất vui khi thấy các em hứng thú với môn Công Nghệ. Từ những dự án nhỏ đến các ý tưởng sáng tạo, các em đã cho thầy thấy sự khéo léo. Thầy chúc các em luôn đổi mới và thành công!"        
    },
    {
      id: 12,
      name: "Thầy Phúc",
      role: "Giáo viên bộ môn",
      subject: "GDCD, GDĐP",
      avatar: "/Imagehs/had.jpg",
      message:
         "Các em lớp 9A1 thân mến, thầy rất vui khi được đồng hành cùng các em trong những bài học về đạo đức, pháp luật và kỹ năng sống. Thầy tin rằng sự hiểu biết về quyền và nghĩa vụ công dân, cùng những giá trị sống tích cực mà các em tiếp thu sẽ là nền tảng vững chắc cho tương lai. Hãy luôn sống trung thực, có trách nhiệm và yêu thương những người xung quanh. Chúc các em vững bước và thành công!"
    },
    {
      id: 13,
      name: "Cô Triệu Vân",
      role: "Giáo viên bộ môn",
      subject: "Tin Học",
      avatar: "/Imagehs/had.jpg",
      message:
        "Các em học sinh 9A1 thân yêu, cô vô cùng tự hào khi được là giáo viên chủ nhiệm của một tập thể đầy năng lượng và sáng tạo như các em. Trong hành trình ba năm, các em không chỉ tiến bộ trong học tập mà còn trưởng thành về nhân cách. Với môn Tin học, cô mong rằng những kỹ năng công nghệ các em học được sẽ giúp các em tự tin trong thế giới số. Hãy luôn giữ tinh thần cầu tiến, trái tim nhân hậu và khát vọng vươn xa. Cô chúc các em bay cao, bay xa và luôn thành công!"
    },
  ]

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
          Lời Nhắn Từ Giáo Viên
        </motion.h1>

        <div className="space-y-16">
          {teachersMessages.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-xl overflow-hidden border border-purple-500/20"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-purple-800/30">
                  <div className="p-6 flex flex-col items-center justify-center h-full">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-white/50">
                      <img
                        src={teacher.avatar || "/placeholder.svg"}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center">{teacher.name}</h3>
                    <p className="text-purple-200 text-center mb-1">{teacher.role}</p>
                    <p className="text-purple-300 text-center">Môn: {teacher.subject}</p>
                  </div>
                </div>

                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="flex items-start mb-4">
                    <Quote className="text-purple-400 mr-2 flex-shrink-0 mt-1" size={24} />
                    <p className="text-purple-100 italic leading-relaxed">{teacher.message}</p>
                  </div>

                  {teacher.videoUrl && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <MessageSquare className="mr-2" size={18} />
                        Video nhắn gửi
                      </h4>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src={teacher.videoUrl}
                          title={`Lời nhắn từ ${teacher.name}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    </div>
                  )}

                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
