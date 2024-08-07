

export default function Avtaar({data}: any){
    
    const genre = data.genres.map((genre: string, index: any) => {
        const colors = ['#1b263b', '#8e7dbe', '#0a9396', '#ffa69e', '#84a98c'];
        var color = colors[Math.floor(Math.random()*colors.length)];
        return (
            <p key={index} className='text-sm px-2 py-1 bg-gray-100 rounded-full flex flex-wrap' style={{background: color}}>
                {genre}
            </p>
        );
    });
    
    return (
        <div className="w-full md:w-3/6 rounded-xl flex gap-4 items-center p-4 shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out bg-gradient-to-r from-[#1db954] via-[#191414] to-[#191414] border border-gray-200 justify-between">
            <img 
                src={data.images[0].url} 
                className="rounded-full shadow-sm" 
                width={140} 
                height={140} 
                alt={data.name}
            />
            <div className="w-4/6 p-3 flex flex-col gap-3 items-end">
                <p className="text-lg font-semibold text-white">{data.name}</p>
                <p className="text-sm text-white">Followers: {data.followers.total.toLocaleString()}</p>
                <div className="flex flex-wrap gap-2 w-4/6 justify-end">
                    {genre}
                </div>
            </div>
        </div>
    );
}