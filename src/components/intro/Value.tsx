import Toggle from "../elements/Toggle";

function Value({ iconComponent, title, children }: { iconComponent: React.ReactNode; title: string | React.ReactNode; children?: React.ReactNode }) {
    return (
        <div className='bg-accent-400 shadow-sm rounded-xl p-5 spacing-y-5 horizontal items-start'>
            <span className='mr-5'>{iconComponent}</span>
            <div className="flex-grow">
                {children ? <div className="-mt-1"><Toggle className="" title={<span className='mr-5'>{title}</span>}>
                    <div className='space-y-2'>{children}</div>
                </Toggle></div> : <div className="pr-2">{title}</div>}
            </div>
        </div>
    );
}

export default Value;
