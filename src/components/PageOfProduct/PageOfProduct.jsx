import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, {useCallback, useRef, useState} from "react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import collectionMen from "../../assets/images/collection-three.png"
import collectionMenOne from "../../assets/images/collection-one.png"
import collectionMenTwo from "../../assets/images/collection-two.png"
import {Button} from "@chakra-ui/react";
import brandOne from '../../assets/images/brandOne.png'
import ArtiganiBoutique from '../../assets/images/ArtiganiBoutiqe.png'
import item1 from "../../assets/images/newsItem1.png";
import item2 from "../../assets/images/newsItem2.png";
import item3 from "../../assets/images/newsItem3.png";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";
import Bruno from "../../assets/images/BrunoBuccarati.png"
import BrunoMan1 from "../../assets/images/BrunoMan1.png"
import BrunoMan2 from "../../assets/images/BrunoMan2.png"
import BrunoMan3 from "../../assets/images/BrunoMan3.png"
import BrunoMan4 from "../../assets/images/BrunoMan4.png"
import BrunoMan5 from "../../assets/images/BrunoMan5.png"






export function PageOfProduct () {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const sliderRef = useRef(null)

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    return (
        <div className='border-gray border-solid border-t mt-10'>
            <div className="container details-content">
                <div className="details-slider max-w-[620px]">

                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{swiper: thumbsSwiper}}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >

                        <SwiperSlide>
                            <img src={Bruno}/>
                            <div
                                className="absolute top-0 right-0 text-white font-semibold rounded-full px-8 py-14 text-4xl"
                                style={{background: "red"}}>-70%
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '620px', height: "816px"}} src={collectionMen}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '620px', height: "816px"}} src={collectionMenTwo}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '620px', height: "816px"}} src={collectionMenOne}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Bruno}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '620px', height: "816px"}} src={collectionMen}/>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={32}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mt-5"
                    >
                        <SwiperSlide>
                            <img src={BrunoMan1}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BrunoMan2}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BrunoMan3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BrunoMan4}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BrunoMan5}/>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="details-about">
                    <h2 className="details-title mb-1">Замшевая куртка-бомбер на овчине Brunello Cucinelli</h2>
                    <p className="details-articule mb-5 ">Артикул: MTS806699/.C1091-1-1</p>
                    <div className="flex">
                        <span className="details-price mr-5" style={{fontSize: '20px'}}>123 000 ₽</span> <span
                        style={{color: 'red', fontWeight: '700', fontSize: '20px'}}>96 000 ₽</span>
                    </div>
                    <div className="details-buttons mb-7">
                        <button
                            className="details-btn details-btn--active hover:bg-black hover:text-white transition-all rounded text-lg text-center mr-5">50
                        </button>
                        <button className="details-btn rounded text-lg mr-5">52</button>
                        <button className="details-btn rounded text-lg mr-5">54</button>
                        <button className="details-btn rounded text-lg mr-5">56</button>
                    </div>
                    <div className="mb-7">
                        <Button className="mr-5" colorScheme='blue' background="rgb(25, 4, 4);" width="187px"
                                height="47px" borderRadius="none">В КОРЗИНУ</Button>
                        <Button colorScheme='blue' background="rgb(25, 4, 4);" width="187px" height="47px"
                                borderRadius="none">БЫСТРЫЙ ЗАКАЗ</Button>
                    </div>
                    <div className="border-b-2"></div>
                    <p className="details-text mb-5">Куртка-бомбер из замшевого ширлинга Texture, который имеет
                        бархатистый и матовый вид с <br/> наружной стороны. Пушистая и теплая внутренняя сторона
                        обеспечивает должную защиту для <br/> холодного сезона.
                        <br/>
                        <br/> <span style={{fontWeight: "700"}}>Данная модель большемерит на размер.</span></p>
                    <p className="details-text mb-5"><span style={{fontWeight: "700"}}>Материал:</span> 100% Дубленая
                        Кожа</p>
                    <p className="details-text mb-5"><span style={{fontWeight: "700"}}>Подкладка:</span> 100% Овчина</p>
                    <p className="details-text "><span style={{fontWeight: "700"}}>Производитель:</span> Италия</p>
                    <div className="border-b-2 mb-5"></div>
                    <div className="flex mb-7">
                        <div className=" border mr-5">
                            <img src={brandOne} alt=""/>
                        </div>
                        <div className="flex " style={{background: "whitesmoke"}}>
                            <img className="mr-5" src={ArtiganiBoutique} alt=""/>
                            <div className="mt-5">
                                <p>Товар в наличии</p>
                                <a href="#" style={{color: 'red'}}>www.artigiani.boutique</a>
                                <p>Санкт-Петербург, Большой проспект ПС 13 <span className="invisible">.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <a href="#" className="mr-7 underline">Смотреть все джинсы</a>
                        <a href="#" className="mr-7 underline">Смотреть все товары бренда</a>
                        <a href="#" className="mr-7 underline">Смотреть все товары для мужчин</a>
                    </div>
                </div>
            </div>
            <section className="items">
                <div className="container">
                    <h2 className="font-semibold text-center text-4xl my-10 " style={{
                        fontSize: "55px",
                        marginBottom: '10%',
                        marginTop: '90px',
                        fontWeight: "300"
                    }}>С ЭТИМ ТОВАРОМ ПОКУПАЮТ</h2>

                    <div className="relative">
                        <Swiper
                            modules={[Navigation]}
                            ref={sliderRef}
                            spaceBetween={35}
                            slidesPerView={4}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div>
                                    <img src={item1} alt="Slide 1" className="swiper-image relative"/>
                                    <div
                                        className="absolute top-0 right-0 text-white font-semibold rounded-full px-4 py-4 text-2xl"
                                        style={{background: "red"}}>-70%
                                    </div>
                                    <p className="swiper-text">Saint Laurent</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item2} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2">
                                        <span
                                            style={{ fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item3} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2">
                                        <span
                                            style={{fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item1} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">Saint Laurent</p>
                                    <p className="text-center mt-2">
                                        <span
                                            style={{ fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item2} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item3} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="absolute top-1/2 z-10 w-full">
                            <button
                                onClick={handlePrev}
                                className="border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  left-[-70px]">
                                <FaChevronLeft
                                    size="34"
                                />
                            </button>
                            <button
                                onClick={handleNext}
                                className=" border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  right-[-70px]">
                                <FaChevronRight
                                    size="34"
                                />
                            </button>
                        </div>
                    </div>


                </div>
            </section>
            <div className=" mt-12 border-b-2"></div>
            <section className="items">
                <div className="container">
                    <h2 className="font-semibold text-center text-4xl my-10 " style={{
                        fontSize: "55px",
                        marginBottom: '10%',
                        marginTop: '90px',
                        fontWeight: "300"
                    }}>ПОХОЖИЕ ТОВАРЫ</h2>

                    <div className="relative">
                        <Swiper
                            modules={[Navigation]}
                            ref={sliderRef}
                            spaceBetween={35}
                            slidesPerView={4}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div>
                                    <img src={item1} alt="Slide 1" className="swiper-image relative"/>
                                    <div
                                        className="absolute top-0 right-0 text-white font-semibold rounded-full px-4 py-4 text-2xl"
                                        style={{background: "red"}}>-70%
                                    </div>
                                    <p className="swiper-text">Saint Laurent</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item2} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item3} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item1} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">Saint Laurent</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item2} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item3} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="absolute top-1/2 z-10 w-full">
                            <button
                                onClick={handlePrev}
                                className="border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  left-[-70px]">
                                <FaChevronLeft
                                    size="34"
                                />
                            </button>
                            <button
                                onClick={handleNext}
                                className=" border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  right-[-70px]">
                                <FaChevronRight
                                    size="34"
                                />
                            </button>
                        </div>
                    </div>


                </div>
            </section>
            <div className=" mt-12 border-b-2"></div>
            <section className="items">
                <div className="container">
                    <h2 className="font-semibold text-center text-4xl my-10 " style={{
                        fontSize: "55px",
                        marginBottom: '10%',
                        marginTop: '90px',
                        fontWeight: "300"
                    }}>РАНЕЕ ВЫ СМОТРЕЛИ</h2>

                    <div className="relative">
                        <Swiper
                            modules={[Navigation]}
                            ref={sliderRef}
                            spaceBetween={35}
                            slidesPerView={4}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div>
                                    <img src={item1} alt="Slide 1" className="swiper-image relative"/>
                                    <div
                                        className="absolute top-0 right-0 text-white font-semibold rounded-full px-4 py-4 text-2xl"
                                        style={{background: "red"}}>-70%
                                    </div>
                                    <p className="swiper-text">Saint Laurent</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item2} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item3} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item1} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">Saint Laurent</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item2} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item3} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="absolute top-1/2 z-10 w-full">
                            <button
                                onClick={handlePrev}
                                className="border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  left-[-70px]">
                                <FaChevronLeft
                                    size="34"
                                />
                            </button>
                            <button
                                onClick={handleNext}
                                className=" border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  right-[-70px]">
                                <FaChevronRight
                                    size="34"
                                />
                            </button>
                        </div>
                    </div>


                </div>

            </section>
            <div className=" mt-12 border-b-2"></div>
        </div>


    )
}