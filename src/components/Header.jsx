export function Header({children}){

    console.log()
    return (
        <header>
            <div>
                <h1 className='p-4 text-center font-semibold text-xl bg-blue-300'>
                    {children}
                </h1>               
            </div>
        </header>
    )
}