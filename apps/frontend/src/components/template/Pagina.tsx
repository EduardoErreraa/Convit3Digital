import Logo from "./Logo";

export interface PaginasProps {
    children: React.ReactNode;
    className?: string;
}

export default function Pagina(props: PaginasProps) {
    return (
        <div className="
            flex flex-col items-center py-10 min-h-screen
            bg-[url('/background.png')] bg-cover bg-black 
            text-white
        ">
            <Logo></Logo>
            <main className={`
                flex-1 flex flex-col justify-center py-10
                container ${props.className}
                `}>
                {props.children}
            </main>
        </div>
    )
}