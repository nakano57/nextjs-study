async function getData() {
    const res = await fetch('http://localhost:3000/bye', {
        cache: 'no-store',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!res.ok) {
        // エラー処理、throw new Error("hoge")などをする
        // app/error.tsxとかを作っておけばそこに飛べる。
    }

    return await res.json();
}

export default async function Home() {
    const data = await getData();

    return (
        <main>
            <p>test page</p>
            <ul>
                {
                    Object.keys(data).map(d => {
                        return <li key={d}>{d}: {data[d]}</li>
                    })
                }
            </ul>
        </main>
    )
}