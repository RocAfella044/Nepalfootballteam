export default function History() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
         Our History
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-100 h-64 rounded-2xl md:order-1">
              <img
                src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/91627184_3929461723738415_3655691113689251840_n.jpg?stp=dst-jpg_tt6&cstp=mx960x744&ctp=p180x540&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dBuxJoBqNFUQ7kNvwG-5Lp6&_nc_oc=Adqae2g86ry48AiH8qOqSUzl_38poS2MdhGWuBkZR7rvDhD8yw-lo2xejnXdS6GL3PA&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=p_VuSZ2BoQsgSej4tZ2_8g&_nc_ss=7b2a8&oh=00_Af_H2iyDT2a8T2E2XY9hif3tQ_S_LyhsTXdsHj_xeDK-WA&oe=6A4E0B78"
                alt=""
                className="w-full h-65 object-cover"
              />
            </div>
            <div className="md:order-2">
              <h3 className="text-2xl font-semibold mb-4">The Beginning</h3>
              <p className="text-gray-600 text-justify">
                Nepal Football Association (ANFA) was founded in 1959. The
                national team played its first international match in 1972.
              </p>
            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-1">
              <h3 className="text-2xl font-semibold mb-4">Golden Era</h3>
              <p className="text-gray-600 text-justify">
                Nepal achieved its greatest success by winning the SAFF
                Championship in 2016 and reaching the finals in multiple
                editions.
              </p>
            </div>
            <div className="bg-gray-100 h-64 rounded-2xl md:order-2">
              <img
                src="https://english.onlinekhabar.com/wp-content/uploads/2016/02/Nepal-Football.jpg"
                alt=""
                className="w-full h-65 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-100 h-64 rounded-2xl md:order-1">
              <img
                src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2021/third-party/2446421941415204648330186178612658841946254n-1634142088.jpg&w=900&height=601"
                alt=""
                className="w-full h-65 object-cover"
              />
            </div>
            <div className="md:order-2">
              <h3 className="text-2xl font-semibold mb-4">
                Abdullah Almutairi Era
              </h3>
              <p className="text-gray-600 text-justify">
                From 2021 to 2022, coach Abdullah Al Mutairi transformed Nepal's
                footballing ambitions, leading the team to its historic
                first-ever SAFF Championship 2021 final and elevating the
                country's presence on the South Asian football stage.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-1">
              <h3 className="text-2xl font-semibold mb-4">
                Dasharath Stadium Revival
              </h3>
              <p className="text-gray-600 text-justify">
                The renovation and reopening of the historic Dasharath Stadium
                gave Nepal football a modern home. Packed crowds and passionate
                support helped create memorable moments for the national team
                and strengthened football's popularity across the country.
              </p>
            </div>
            <div className="bg-gray-100 h-64 rounded-2xl md:order-2">
              <img
                src="https://english.onlinekhabar.com/wp-content/uploads/2022/08/Dashrath-Stadium-Kathmandu-sports-infrastructure.jpg"
                alt=""
                className="w-full h-65 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
