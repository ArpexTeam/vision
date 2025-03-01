function CardService(props){
    return(
        <>
        <div className={`flex ${props.flexDirection} ${props.top} w-fit ml-10 sm:ml-10 mr-auto relative sm:left-20`}>
            <div className={`${props.paddingDirection} text-left flex flex-col border-[#343434] border justify-center text-white w-11/12 sm:w-10/12 md:w-96 h-74 md:h-52 ${props.gradientDirection} from-[#131313]/20 to-[#FFFFFF]/20 rounded-xl`}>
               <h1 className='text-white w-fit text-[28px] font-[ClashDisplay-SemiBold]'>{props.title}</h1>
               <p className='font-[ClashDisplay-Light] text-[15px]'>{props.textBody}</p>
            </div>
            <div className={`mt-0 md:mt-6 ${props.marginDirection} w-11/12 sm:w-10/12 md:w-60 h-64 rounded-xl z-10 divImg`} style={{backgroundImage:`url(${props.image})`, backgroundSize:'cover', backgroundPosition:'center'}}>

            </div>
       </div>
        </>
    )
}

export default CardService;