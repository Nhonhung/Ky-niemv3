"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, User, Mail, Phone, MapPin, Facebook } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  // Sample members data
  const members = [
    {
      id: 1,
      name: "Phạm Thị Xinh",
      nickname: "Giáo viên",
      avatar: "/Imagehs/had.jpg",
      role: "Giáo viên chủ nhiệm",
      hobbies: ["Tiếng anh", "Du lịch", "Thể thao"],
      quote: "Dạy và học là một hành trình",
      contact: {
        email: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 2,
      name: "Phạm Đức Thịnh",
      nickname: "ZLS",
      avatar: "/Imagehs/ZLS4.jpeg",
      role: "Học sinh Signature",
      hobbies: ["Coder", "Exploit", "Learning", "C++", "Lua"],
      quote: "Chill với cuộc sống",
      contact: {
        facebook: "https://www.facebook.com/ownzls",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 3,
      name: "Lê Quỳnh Trâm",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Lớp trưởng",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Lớp trưởng là một trách nhiệm lớn",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 4,
      name: "Khương Thị Như Huệ",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Lớp phó học tập",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Lớp phó học tập là một vai trò quan trọng",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 5,
      name: "Nguyễn Khả Gia Như",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Lớp phó văn nghệ, Tổ trưởng tổ 3",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Văn nghệ là một phần không thể thiếu trong cuộc sống",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 6,
      name: "Lê Thị Mỹ Ly",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Tổ trưởng tổ 1",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Tổ trưởng tổ 1 là một vị trí quan trọng trong tổ",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 7,
      name: "Phạm Ngọc Linh Nhi",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Tổ phó tổ 1",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Tổ phó tổ 1 là một vị trí quan trọng trong tổ",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 8,
      name: "Trần Quang Huy",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 9,
      name: "Phạm Ngọc Khánh Băng",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        faxebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 10,
      name: "Hồ Hoàng Huy",
      nickname: "Hoc sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 11,
      name: "Nguyễn Hoàng Nhã Trúc",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 12,
      name: "Nguyễn Đình Uy Vũ",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 13,
      name: "Nguyễn Thị Bích Ngọc",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 14,
      name: "Huỳnh Gia Thịnh",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 15,
      name: "Đoàn Phương Thùy Dung",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 16,
      name: "Nguyễ Thanh Huyền",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 17,
      name: "Trần Đăng Quân",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Tổ trưởng tổ 2",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Tổ trưởng tổ 2 là một vị trí quan trọng trong tổ",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 18,
      name: "Đoàn Ngô Uyễn Vy",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Tổ phó tổ 2",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Tổ phó tổ 2 là một vị trí quan trọng trong tổ",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 19,
      name: "Nguyễn Phúc Chương ",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        Facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 20,
      name: "Lê Xuân Sơn",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 21,
      name: "Hoàng Phương Anh",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 22,
      name: "Nguyễn Bảo Trâm",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 23,
      name: "Phan Lê Ngọc Vũ",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 24,
      name: "Lê Hoàng Thanh Ngân",
      nickname: "Hoc sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 25,
      name: "Trương Thị Phương Uyên",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 26,
      name: "Bùi Minh Thắng",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 27,
      name: "Nguyễn Thị Thúy Nhi",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 28,
      name: "Huỳnh Đặng Phương Thảo",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Tổ phó tổ 3",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Tổ phó tổ 3 là một vị trí quan trọng trong tổ",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 29,
      name: "Nguyễn Hồ Nhã Thy",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 30,
      name: "Nguyên Văn Huy",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 31,
      name: "Nguyễn Thị Bảo Ny",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 32,
      name: "Lê Quý Hồng Quân",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 33,
      name: "Nguyễn Tất Giỏi",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 34,
      name: "Hồ Thanh Thảo",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 35,
      name: "Trần Hữu Hường",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Locked",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 36,
      name: "Lê Vũ Thế Dân",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 37,
      name: "Phạm Thị Thanh Hiền",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Tổ trưởng tổ 4",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Tổ trưởng tổ 4 là một vị trí quan trọng trong tổ",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 38,
      name: "Phạm Lê Thái An",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Tổ phó tổ 4",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Tổ phó tổ 4 là một vị trí quan trọng trong tổ",
      contact: {
        email: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 39,
      name: "Đào Văn Minh",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 40,
      name: "Nguyễn Thi Thuy Thủy",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Locked",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 41,
      name: "Trần Thùy Trang",
      nickname: "Học sinh meme",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh meme làm chúa hề cho lớp",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 42,
      name: "Nguyễn Ánh Ngọc Trâm",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 43,
      name: "Nguyễn Duy Khang",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Locked",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 44,
      name: "Mã Thị Hồng Lệ",
      nickname: "Hoc sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Hoc sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 45,
      name: "Nguyễn Thị Mai Anh",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 46,
      name: "Nguyên Minh Đức",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 47,
      name: "Lê Trương Như Ý",
      nickname: "Học sinh",
      avatar: "/Imagehs/had.jpg",
      role: "Học sinh",
      hobbies: ["Locked", "Locked", "Locked"],
      quote: "Học sinh là một giai đoạn quan trọng trong cuộc đời",
      contact: {
        facebook: "Locked",
        phone: "Locked",
        address: "Locked",
      },
    },
    {
      id: 48,
      name: "LEAK T A",
      nickname: "L T A",
      avatar: "/Imagehs/chad.jpeg",
      role: "Web Creator",
      hobbies: ["C#", "C++", "Python","JavaScript","Html","Css","make website","own website","Hi"],
      quote: "Behind every great founder, there's always someone even more essential",
      contact: {
        email: "?",
        phone: "?",
        address: "?",
      },
    },
  ]

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="min-h-screen pt-20 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Thành Viên Lớp 9A1
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto mb-12 relative"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm thành viên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-full bg-white/10 backdrop-blur-md border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300" size={18} />
          </div>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-xl overflow-hidden border border-purple-500/20 cursor-pointer"
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-purple-200">"{member.nickname}"</p>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedMember === member.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="p-4"
                >
                  <div className="mb-3">
                    <p className="text-purple-200 mb-1">Vai trò:</p>
                    <p className="text-white font-medium">{member.role}</p>
                  </div>

                  <div className="mb-3">
                    <p className="text-purple-200 mb-1">Sở thích:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.hobbies.map((hobby, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-800/50 rounded-full text-xs text-white">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-purple-200 mb-1">Châm ngôn:</p>
                    <p className="text-white italic">"{member.quote}"</p>
                  </div>

                  <div className="pt-2 border-t border-purple-500/30">
                    <p className="text-purple-200 mb-2">Liên hệ:</p>
                    <div className="space-y-1 text-sm">
                      {member.contact.email && (
                        <div className="flex items-center gap-2 text-white">
                          <Mail size={14} className="text-purple-300" />
                          <span>{member.contact.email}</span>
                        </div>
                      )}
                      {member.contact.facebook && (
                        <div className="flex items-center gap-2 text-white">
                          <a
                            href={member.contact.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Facebook Profile"
                            className="flex items-center gap-2"
                          >
                            <Facebook size={14} className="text-purple-300" />
                            <span>{member.contact.facebook}</span>
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-white">
                        <Phone size={14} className="text-purple-300" />
                        <span>{member.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <MapPin size={14} className="text-purple-300" />
                        <span>{member.contact.address}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <User size={48} className="mx-auto text-purple-400 mb-4" />
            <p className="text-purple-200 text-lg">Không tìm thấy thành viên nào</p>
          </div>
        )}
      </div>
    </main>
  )
}