import Image from "next/image";

export default function Page() {
  return (
    <>
      <main className=" flex-grow ">
        <div className="text-center mb-8">
          <h3 className="text-5xl mb-3">Cours</h3>
          <p className="text-xs">
            "Ma&icirc;trisez le trading avec les analyses en trois touches,
            fondamentales et par cassure gr&acirc;ce &agrave; Aurum Cartel."
          </p>
        </div>
        <div className="grid grid-cols-3 mx-40 gap-10 my-28">
          <div>
            <Image
              className="rounded-t-xl"
              src="/assets/images/bg1.jpg"
              width={300}
              height={300}
              alt="fondamentale"
            />
            <div className="bg-[#2c2c2cec] mr-[207px] rounded-b-xl px-5 py-5">
              <span className="border-[#D4AF37] border rounded-xl px-10 mx-5 font-semibold">
                Fondamentales
              </span>
              <p className="text-sm mt-3 mb-4">
                L&apos;analyse fondamentale se penche sur les bases
                &eacute;conomiques et financi&egrave;res qui influencent la
                valeur d&apos;un actif..
              </p>
              <span className="text-lg">
                <strong>Par</strong> Sandro Lu
              </span>
            </div>
          </div>
          <div>
            <Image
              className="rounded-t-xl"
              src="/assets/images/bg1.jpg"
              width={300}
              height={300}
              alt="trois_touche"
            />
            <div className="bg-[#2c2c2cec] mr-[207px] rounded-b-xl px-5 py-5">
              <span className="border-[#D4AF37] border rounded-xl px-10 mx-5 font-semibold">
                Trois Touches
              </span>
              <p className="text-sm mt-3 mb-4">
                L&apos;analyse fondamentale se penche sur les bases
                &eacute;conomiques et financi&egrave;res qui influencent la
                valeur d&apos;un actif..
              </p>
              <span className="text-lg">
                <strong>Par</strong> Sandro Lu
              </span>
            </div>
          </div>
          <div>
            <Image
              className="rounded-t-xl"
              src="/assets/images/bg1.jpg"
              width={300}
              height={300}
              alt="cassure"
            />
            <div className="bg-[#2c2c2cec] mr-[207px] rounded-b-xl px-5 py-5">
              <span className="border-[#D4AF37] border rounded-xl px-10 mx-5 font-semibold">
                Cassures
              </span>
              <p className="text-sm mt-3 mb-4">
                L&apos;analyse fondamentale se penche sur les bases
                &eacute;conomiques et financi&egrave;res qui influencent la
                valeur d&apos;un actif..
              </p>
              <span className="text-lg">
                <strong>Par</strong> Sandro Lu
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
