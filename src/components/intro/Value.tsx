function Value({ iconComponent, children }: { iconComponent: React.ReactNode, children: React.ReactNode }) {
    return (<div className='border border-gray-300 rounded-lg p-5 spacing-y-5 horizontal'>
        <span className='font-bold mr-5'>
            {iconComponent}
        </span>
        <div className='space-y-2'>
            {children}
        </div>
    </div>);
}

export default Value;