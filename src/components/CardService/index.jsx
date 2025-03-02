function CardService(props){
    return(
        <>
        <div className={`flex ${props.flexDirection} ${props.top} w-fit ml-10 mr-auto relative left-20`}>
            <div className={`${props.paddingDirection} text-left flex flex-col  border-[#343434] border justify-center text-white w-60 pl-6 md:w-96 h-74 md:h-52 ${props.gradientDirection} from-[#131313]/20 to-[#FFFFFF]/20 rounded-xl`}>
               <h1 className='text-white w-fit text-[28px] leading-[1.0] mb-3 font-[ClashDisplay-SemiBold]'>{props.title}</h1>
               <p className='w-[260px] pr-10 font-[ClashDisplay-Light] text-[14px]'>{props.textBody}</p>
            </div>
            <div className={`mt-12 md:mt-6 ${props.marginDirection} w-60 h-64 rounded-xl z-10 divImg`} style={{backgroundImage:`url(${props.image})`, backgroundSize:'cover', backgroundPosition:'center'}}>

            </div>
       </div>
        </>
    )
}

export default CardService;