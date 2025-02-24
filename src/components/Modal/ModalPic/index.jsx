function ModalPic(props){
    return(
        <>
        <div className={`border-4 border-[#06E5F1] rounded-md top-1/2 left-1/2 ${props.type == "video" ? "w-3/4" : "w-2/4"} h-3/4 fixed z-40 ${props.visibleProps ? "block" : "hidden"}`} style={{transform:'translate(-50%, -50%)', backgroundImage:`url(${props.thumb})`, backgroundSize:'cover', backgroundPosition:'center'}}>
        <button onClick={props.close} className="absolute rounded-sm right-5 top-5 text-[20px] px-2 bg-[#06E5F1] font-[ClashDisplay-Semibold]">X</button>

        </div>
        <div className={`bg-[#000000]/70 w-screen h-screen z-10 fixed top-0 left-0 ${props.visibleProps ? "block" : "hidden"}`}></div>
        </>
    );
}

export default ModalPic;