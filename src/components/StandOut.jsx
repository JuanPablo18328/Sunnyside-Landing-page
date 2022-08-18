import standMobile from '../img/mobile/image-stand-out.jpg';
import standDesktop from '../img/desktop/image-stand-out.jpg';

const StandOut = () => {
    return (
        <>
            <section className='lg:flex items-center'>
                <div>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={standDesktop} />
                        <img src={standMobile} alt="stand" />
                    </picture>
                </div>

                <div className='p-5 text-center lg:text-left lg:w-1/2 lg:ml-20 '>
                    <h2 className='text-2xl my-5 lg:text-4xl'>Stand out to the right audience</h2>
                    <p className='mb-5'>  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
                    <button className='btn-standout'>Learn More</button>
                </div>
            </section>

        </>
    );
}

export default StandOut;