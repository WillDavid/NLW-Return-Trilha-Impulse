import { CloseButton } from "./CloseButton";

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                

            </div>


            <footer className="text-xs text-neutral-400">
                Feito com S2 pelo <a className="underline underline-offset-2" href="https://will-frontend-dev.netlify.app/#/">Will. David</a>

            </footer>
        </div>
    )
}