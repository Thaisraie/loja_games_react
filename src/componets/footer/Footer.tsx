import { Envelope, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-slate-800  text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Raie Games | &copy; Copyright: {data}</p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/thaisqusi/" target="_blank">
                            <LinkedinLogo size={38} weight='bold' />
                        </a>
                        <a href="https://github.com/Thaisraie" target="_blank">
                            <GithubLogo size={38} weight="bold" />
                        </a>
                        <a href="mailto:thaisdivino21@gmail.com">
                            <Envelope size={38} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer