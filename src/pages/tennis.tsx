import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ArrowUp, ArrowUp01 } from "lucide-react";

function RunningBanner() {
  return (
    <div className="w-full h-[50px] bg-[#8FFC00] overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute inset-y-0 left-0 flex items-center whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-x-10 px-6 md:px-8">
            <span className="font-semibold text-neutral-900">
              Giải Tennis Kết Nối Yêu Thương
            </span>
            <span className="font-semibold text-neutral-900">
              Tranh Cúp Bảo Vệ Thắng Lợi
            </span>
          </div>
          <div className="flex items-center gap-x-10 px-6 md:px-8">
            <span className="font-semibold text-neutral-900">
              Giải Tennis Kết Nối Yêu Thương
            </span>
            <span className="font-semibold text-neutral-900">
              Tranh Cúp Bảo Vệ Thắng Lợi
            </span>
          </div>
          <div className="flex items-center gap-x-10 px-6 md:px-8">
            <span className="font-semibold text-neutral-900">
              Giải Tennis Kết Nối Yêu Thương
            </span>
            <span className="font-semibold text-neutral-900">
              Tranh Cúp Bảo Vệ Thắng Lợi
            </span>
          </div>
          <div className="flex items-center gap-x-10 px-6 md:px-8">
            <span className="font-semibold text-neutral-900">
              Giải Tennis Kết Nối Yêu Thương
            </span>
            <span className="font-semibold text-neutral-900">
              Tranh Cúp Bảo Vệ Thắng Lợi
            </span>
          </div>
          <div className="flex items-center gap-x-10 px-6 md:px-8">
            <span className="font-semibold text-neutral-900">
              Giải Tennis Kết Nối Yêu Thương
            </span>
            <span className="font-semibold text-neutral-900">
              Tranh Cúp Bảo Vệ Thắng Lợi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function TennisPage() {
  return (
    <div>
      {/* Running Banner */}
      <RunningBanner />
      <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: inline-flex;
              width: 200%;
              animation: marquee 18s linear infinite;
            }
          `}</style>
      <main className="w-full h-full pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-8">
          {/* Title trên cùng */}
          <h1 className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
            Giải Tennis
            <span className="block mt-2 sm:mt-4">Kết Nối Yêu Thương</span>
          </h1>
        </div>

        {/* Hero Section */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 mt-8 sm:mt-10">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img
              src="/tennis-hero.png"
              alt="Hình ảnh mở đầu Giải tennis Kết Nối Yêu Thương"
              className="w-full rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8">
              <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 md:items-end">
                {/* Left (Title + Buttons) */}
                <div className="text-white">
                  <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight pb-4 sm:pb-6">
                    Tranh Cúp <br />
                    Bảo Vệ Thắng Lợi
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button className="flex items-center justify-between rounded-full h-11 px-5 sm:h-14 sm:px-8 bg-slate-900 text-white text-sm sm:text-lg md:text-xl hover:bg-white/10">
                      <span>Xem album hình ảnh</span>
                      <span className="ml-2 w-8 h-8 flex items-center justify-center bg-lime-500 text-slate-950 rounded-full rotate-40">
                        <ArrowUp />
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full h-11 px-5 text-sm sm:h-14 sm:px-8 sm:text-lg md:text-xl border-white/30 bg-white/10 text-white backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/15"
                    >
                      Về Giải Đấu
                    </Button>
                  </div>
                </div>

                {/* Right (Description) */}
                <p className="text-white/90 text-sm sm:text-base leading-relaxed mt-4 md:mt-0 md:pl-6">
                  Giải quần vợt Mở rộng Giải Tennis Kết Nối Yêu Thương là một
                  trong những sự kiện thể thao hấp dẫn, quy tụ nhiều tay vợt
                  hàng đầu trong và ngoài nước. Giải đấu được tổ chức thường
                  niên
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-8 mt-16 py-12 md:py-16">
          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Về <span className="text-gray-400">Giải Đấu</span>
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 md:pl-6 text-base sm:text-lg md:text-xl leading-relaxed opacity-60">
              Không chỉ là sân chơi để các vận động viên khẳng định tài năng mà
              còn là dịp để giao lưu, kết nối niềm đam mê tennis.
            </p>
          </div>

          {/* Content row */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start md:items-stretch">
            {/* Left: vertical image with overlay text */}
            <div className="relative overflow-hidden rounded-3xl h-full md:h-[800px]">
              <img
                src="/about-1.jpg"
                alt="Khoảnh khắc thi đấu tại giải - ảnh dọc"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-10">
                <p className="text-white/95 text-base sm:text-xl leading-relaxed">
                  Giải đấu không chỉ là sân chơi kết nối những người yêu tennis
                  mà còn hướng tới gây quỹ thiện nguyện để hỗ trợ trẻ em có hoàn
                  cảnh khó khăn.
                </p>
              </div>
            </div>

            {/* Right: horizontal image and details list */}
            <div className="flex flex-col h-full md:min-h-[480px]">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/about-2.png"
                  alt="Khoảnh khắc giải đấu - ảnh ngang"
                  className="w-full h-[200px] sm:h-[300px] md:h-[360px] object-cover rounded-3xl"
                />
              </div>

              <div className="mt-6 space-y-5">
                {/* Time */}
                <div className="space-y-1 ">
                  <div className="text-sm sm:text-base md:text-lg text-neutral-600 opacity-60">
                    Thời gian
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                    12 - 14/10/2025
                  </div>
                  <div className="h-px bg-neutral-200" />
                </div>

                {/* Location */}
                <div className="space-y-1">
                  <div className="text-sm sm:text-base md:text-lg text-neutral-600 opacity-60">
                    Địa điểm
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                    Sân Tennis Phú Thọ, Quận 11, TP.HCM.
                  </div>
                  <div className="h-px bg-neutral-200" />
                </div>

                {/* Quantity */}
                <div className="space-y-1">
                  <div className="text-sm sm:text-base md:text-lg text-neutral-600 opacity-60">
                    Số lượng VĐV
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                    Quy tụ hơn 64 vận động viên
                  </div>
                  <div className="h-px bg-neutral-200" />
                </div>

                {/* Format */}
                <div className="space-y-1">
                  <div className="text-sm sm:text-base md:text-lg text-neutral-600 opacity-60">
                    Format thi đấu
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                    Vòng bảng kết hợp loại trực tiếp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charity Journey Section */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-8 mt-16 py-12 md:py-16">
          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Hành Trình <br />
              <span className="text-gray-400"> Thiện Nguyện</span>
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 md:pl-6 text-base sm:text-lg  md:text-xl leading-relaxed">
              Song song với những trận đấu kịch tính, Giải Tennis Mùa Thu 2025
              còn mang ý nghĩa nhân văn sâu sắc qua chương trình thiện nguyện.
              Đây chính là minh chứng cho tinh thần thể thao gắn liền với sẻ
              chia.
            </p>
          </div>

          {/* Stat cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4">
            {/* Description card - span 40% on md */}
            <div className="md:col-span-6 rounded-3xl bg-sky-50 text-blue-950 font-semibold p-5 sm:p-6 md:p-8">
              <p className="text-lg sm:text-xl leading-relaxed">
                Nhờ sự đóng góp của các vận động viên, nhà tài trợ và khán giả,
                ban tổ chức đã quyên góp và trao tặng đến hơn 150 em nhỏ có hoàn
                cảnh khó khăn, mang lại niềm vui và động lực để các em tiếp tục
                vững bước trong học tập và cuộc sống.
              </p>
            </div>

            {/* Money */}
            <div className="md:col-span-2 rounded-3xl bg-sky-50 text-blue-950 p-5 sm:p-6 md:p-8 font-semibold flex flex-col justify-between">
              <div className="text-6xl font-extrabold tracking-tight">250</div>
              <div className="mt-2 text-base">Triệu đồng</div>
            </div>

            {/* Gifts */}
            <div className="md:col-span-2 rounded-3xl bg-sky-50 text-blue-950 p-5 sm:p-6 md:p-8 font-semibold flex flex-col justify-between">
              <div className="text-6xl font-extrabold tracking-tight">200</div>
              <div className="mt-2 text-base">Phần quà thiết thực</div>
            </div>

            {/* Beneficiaries */}
            <div className="md:col-span-2 rounded-3xl bg-lime-300 text-neutral-900 p-5 sm:p-6 md:p-8 font-semibold flex flex-col justify-between">
              <div className="text-6xl font-extrabold tracking-tight">150+</div>
              <div className="mt-2 text-base">Em nhỏ có hoàn cảnh khó khăn</div>
            </div>
          </div>

          {/* Wide image */}
          <div className="mt-6 overflow-hidden rounded-3xl">
            <img
              src="/hanh-trinh-1.png"
              alt="Hành trình thiện nguyện trong giải tennis"
              className="w-full h-[260px] sm:h-[360px] md:h-[420px] object-cover rounded-3xl"
            />
          </div>

          {/* Final row: left card + two images */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Left card */}
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div>
                  <span className="inline-flex items-center rounded-full px-4 py-4 text-sm font-medium bg-white/10 text-white/90 ring-1 ring-inset ring-white/20">
                    Về Giải Đấu
                  </span>
                </div>
                <h4 className="text-4xl font-bold leading-snug">
                  Hành trình quyên góp và trao tặng đến các em nhỏ có hoàn cảnh
                  khó khăn
                </h4>
                <div className="text-base text-white/80 opacity-60">
                  Giải Tennis Mùa Thu 2025
                </div>
              </div>

              <div className="mt-6">
                <Button className="rounded-full h-12 px-6 text-base sm:h-14 sm:px-8 sm:text-lg md:text-xl font-semibold bg-white text-neutral-900 hover:bg-white/90">
                  Xem album hình ảnh
                  <span className="ml-1 w-8 h-8 flex items-center justify-center bg-lime-300 text-slate-950 rounded-full rotate-40">
                    <ArrowUp />
                  </span>
                </Button>
              </div>
            </div>

            {/* Right images */}
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="overflow-hidden rounded-3xl h-full">
                <img
                  src="/hanh-trinh-2.png"
                  alt="Khoảnh khắc thiện nguyện 1"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              <div className="overflow-hidden rounded-3xl h-full">
                <img
                  src="/hanh-trinh-3.png"
                  alt="Khoảnh khắc thiện nguyện 2"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Result */}
        <div className="w-full flex justify-center items-center mt-12">
          <div className="w-full max-w-[1440px] h-[400px] mx-auto px-6 md:px-8 bg-sky-50 rounded-3xl p-10 text-center flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-slate-900 mb-3">
              Kết Quả <span className="text-gray-400">& Bảng Thi Đấu</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-10 mt-6">
              Cập nhật đầy đủ kết quả thi đấu, hành trình bứt phá của các vận
              động viên và bảng xếp hạng chi tiết qua từng vòng đấu.
            </p>

            <Button className="flex items-center gap-2 px-6 py-8 bg-slate-900 text-white font-medium rounded-full hover:bg-[#1A213A] transition mx-auto ">
              Xem Ngay
              <span className="flex items-center justify-center w-6 h-6 bg-lime-400 rounded-full rotate-40">
                <ArrowUp className="w-4 h-4 text-black" />
              </span>
            </Button>
          </div>
        </div>

        {/* Honors Top 4 Section */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-8 mt-16 py-12 md:py-16">
          {/* Header row */}
          <div className="grid grid-cols-1 gap-6 md:gap-10 items-start">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Vinh Danh
              <span className="text-gray-400"> Top 4 & Nhà Vô Địch </span>
            </h3>
          </div>

          {/* Cards layout */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch mt-20 ">
            {/* Champion - 40% on md+ */}
            <div className="relative overflow-hidden rounded-3xl md:col-span-5">
              <img
                src="/vinh-danh-1.png"
                alt="Nhà vô địch"
                className="w-full h-[280px] sm:h-[380px] md:h-[460px] object-cover rounded-3xl"
              />
              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
              {/* badge top-left */}
              <div className="absolute top-4 left-4 flex items-center bg-lime-400 rounded-full shadow-md">
                <span className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold text-neutral-900">
                  1
                </span>
                <span className="px-3 text-xs font-semibold text-neutral-900">
                  Nhà Vô Địch
                </span>
              </div>

              {/* bottom info */}
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6">
                <div className="text-white">
                  <p className="text-4xl sm:text-6xl text-lime-400 leading-none opacity-95">
                    “
                  </p>
                  <p className="text-base sm:text-lg max-w-xl opacity-95">
                    Lorem ipsum dolor sit amet consectetur. Id orci vivamus
                    sollicitudin pulvinar tincidunt nulla diam tellus ante.
                  </p>
                  <div className="mt-3 text-base sm:text-lg font-medium">
                    Nguyen Van A
                  </div>
                </div>
              </div>
            </div>

            {/* Others - occupy remaining width */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* 2 */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/vinh-danh-2.png"
                  alt="Á quân 1"
                  className="w-full h-[200px] sm:h-full min-h-[180px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
                <div className="absolute top-4 left-4">
                  <div className="size-9 rounded-full bg-white text-neutral-900 flex items-center justify-center text-sm font-bold shadow-md">
                    2
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white font-medium text-base sm:text-lg">
                  Nguyen Van A
                </div>
              </div>

              {/* 3 */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/vinh-danh-3.png"
                  alt="Á quân 2"
                  className="w-full h-[200px] sm:h-full min-h-[180px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
                <div className="absolute top-4 left-4">
                  <div className="size-9 rounded-full bg-white text-neutral-900 flex items-center justify-center text-sm font-bold shadow-md">
                    3
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white font-medium text-base sm:text-lg">
                  Nguyen Van A
                </div>
              </div>

              {/* 4 */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/vinh-danh-4.png"
                  alt="Hạng 4"
                  className="w-full h-[200px] sm:h-full min-h-[180px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
                <div className="absolute top-4 left-4">
                  <div className="size-9 rounded-full bg-white text-neutral-900 flex items-center justify-center text-sm font-bold shadow-md">
                    4
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white font-medium text-base sm:text-lg">
                  Nguyen Van A
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Highlights Section */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-8 mt-16 py-12 md:py-16">
          {/* Header row */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
              Những Dấu Ấn <span className="text-neutral-400">Giải Đấu</span>
            </h3>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Cùng nhìn lại những khoảnh khắc đáng nhớ của Giải Tennis Mùa Thu
              2025 qua album ảnh được phân nhóm: thi đấu kịch tính, trao quà ý
              nghĩa và hậu trường đầy cảm xúc. Đừng bỏ lỡ video highlight dài
              2-3 phút, nơi những pha bóng gay cấn và nụ cười sẻ chia được tái
              hiện một cách sống động nhất.
            </p>
            <div className="mt-6">
              <Button className="rounded-full h-12 px-6 text-base sm:h-14 sm:px-8 sm:text-lg md:text-xl font-semibold bg-slate-900 text-white hover:bg-neutral-800">
                Xem Album Mùa Giải
                <span className="ml-1 w-8 h-8 flex items-center justify-center bg-lime-400 text-slate-950 rounded-full rotate-33">
                  <ArrowUp />
                </span>
              </Button>
            </div>
          </div>
          {/* Images layout */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            {/* Left: vertical image */}
            <div className="md:col-span-4 overflow-hidden rounded-3xl">
              <img
                src="/dau-an-1.png"
                alt="Khoảnh khắc thi đấu - ảnh dọc"
                className="w-full h-[650px] md:h-[700px] object-cover rounded-3xl"
              />
            </div>

            {/* Right: rest width */}
            <div className="md:col-span-8 grid grid-rows-2 gap-4">
              {/* Top: wide horizontal */}
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/dau-an-2.png"
                  alt="Lưới sân tennis - ảnh ngang"
                  className="w-full h-[340px] md:h-[340px] object-cover rounded-3xl"
                />
              </div>

              {/* Bottom: two halves */}
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="/dau-an-3.png"
                    alt="Khoảnh khắc vận động viên nữ đánh bóng"
                    className="w-full h-[340px] md:h-[340px] object-cover rounded-3xl"
                  />
                </div>

                {/* Dark overlay + text */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="/dau-an-4.png"
                    alt="Khoảnh khắc hậu trường khác"
                    className="w-full h-[340px] md:h-[340px] object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-4xl font-extrabold tracking-tight">
                      +120
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] mx-auto px-6 md:px-8 mt-16 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Đơn Vị <br />
              <span className="text-gray-400"> Đồng Hành </span>
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 md:pl-6 text-base sm:text-lg  md:text-xl leading-relaxed">
              Ban tổ chức xin gửi lời cảm ơn chân thành đến các nhà tài trợ và
              đối tác đã đồng hành cùng Giải Tennis Mùa Thu 2025. Sự hỗ trợ quý
              báu này góp phần giúp giải đấu diễn ra thành công và lan tỏa ý
              nghĩa thiện nguyện.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl mt-10">
            <img
              src="/tai-tro.png"
              alt="Đơn Vị Đồng Hành Banner"
              className="w-full object-cover rounded-3xl"
            />
          </div>
        </section>
        <section className="max-w-[1440px] mx-auto px-6 md:px-8 mt-16 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Left Side */}
            <div className="flex flex-col justify-between h-full">
              {/* Image on top */}
              <div className="overflow-hidden rounded-3xl w-[200px] max-w-sm">
                <img
                  src="/minh-hoa.png"
                  alt="Minh hoạ"
                  className="w-full object-cover rounded-3xl"
                />
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mt-6">
                Câu Chuyện <br />
                <span className="text-gray-400">& Cảm Nhận</span>
              </h3>

              {/* Arrows */}
              <div className="flex space-x-4 mt-6">
                <Button className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-50 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                  <ArrowLeft className="text-slate-950" />
                </Button>
                <Button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-950 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                  <ArrowRight className="text-lime-400" />
                </Button>
              </div>
            </div>

            {/* Right Side - 2 reviewers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/reviewer-1.png"
                  alt="Reviewer 1"
                  className="w-full h-[500px] object-cover rounded-3xl"
                />
              </div>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/reviewer-2.png"
                  alt="Reviewer 2"
                  className="w-full h-[500px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Closing Message Section */}
        <section className="max-w-5xl mx-auto px-6 md:px-8 mt-20 py-12 md:py-16 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
            Khép Lại Một Hành Trình
            <span className="block text-neutral-400">
              Mở Ra Một Chặng Đường Mới
            </span>
          </h3>
          <div className="mt-6 text-neutral-600 dark:text-neutral-300 text-lg sm:text-xl leading-relaxed space-y-3">
            <p>
              Ban tổ chức xin gửi lời cảm ơn chân thành đến tất cả vận động
              viên, khán giả, tình nguyện viên và các đơn vị đồng hành đã góp
              phần tạo nên thành công cho Giải Tennis Mùa Thu 2025. Hành trình
              này sẽ không thể trọn vẹn nếu thiếu sự tham gia và ủng hộ từ mọi
              người.
            </p>
            <p>
              Chúng tôi hy vọng sẽ tiếp tục nhận được sự đồng hành trong những
              hoạt động sắp tới, để tinh thần thể thao và sẻ chia tiếp tục được
              lan tỏa.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Button className="rounded-full h-12 px-6 text-base sm:h-14 sm:px-8 sm:text-lg md:text-xl font-semibold bg-slate-900 text-white hover:bg-neutral-800">
              Hẹn gặp lại ở mùa sau
              <span className="ml-1 w-8 h-8 flex items-center justify-center bg-lime-300 text-slate-950 rounded-full rotate-40">
                <ArrowUp />
              </span>
            </Button>
          </div>
        </section>
        {/* Simple Page Footer */}
        <footer className="mt-12 md:mt-16 border-t border-neutral-200 dark:border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-lg text-neutral-500 dark:text-neutral-300">
            <div>© {new Date().getFullYear()} All rights reserved.</div>
            <div>Developed by Incoshift</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
