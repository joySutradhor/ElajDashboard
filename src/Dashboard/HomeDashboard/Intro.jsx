
// this is inroduction file
// eslint-disable-next-line react/prop-types
const Intro = ({darkMode}) => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className={`text-[22px]  font-nunito ${darkMode ? 'darkSubHeading' : 'heading'}`}>Hi, Welcomeback!</h1>
                <p className={` font-nunito textColor }`}>Mr. Fardeen Ahmed</p>
            </div>
            <div className="flex gap-10">
                <div className="">
                    <p className={`subHeading font-nunito text-[14px] ${darkMode ? 'darkSubHeading' : 'subHeading'}`}>Operation  </p>
                    <h4 className={`text-end priceColor  font-nunito `}>29</h4>
                </div>
                <div>
                    <p  className={`subHeading font-nunito text-[14px] ${darkMode ? 'darkSubHeading' : 'subHeading'}`}>Earning</p>
                    <h4 className="text-end priceColor  font-nunito ">$290</h4>
                </div>
                <div>
                    <p className={`subHeading font-nunito text-[14px] ${darkMode ? 'darkSubHeading' : 'subHeading'}`} >Revenue</p>
                    <h4 className="text-end priceColor  font-nunito">$56M</h4>
                </div>
            </div>
        </div>
    );
};

export default Intro;