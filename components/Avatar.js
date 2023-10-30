import Image from "next/image";

const Avatar = () => {
  return (
    <div className=" hidden xl:flex xl:max-w-none">
      <Image src={"/avatar2.png"} width={1024} height={1024} alt="" className=" w-full h-full" />
    </div>
  );
};

export default Avatar;
