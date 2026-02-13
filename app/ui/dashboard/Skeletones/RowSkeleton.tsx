export default function RowSkeleton() {
    return (
        <>
            {[...Array(2)].map((_, i) => (
                <div
                    key={i}
                    className="grid grid-cols-12 gap-1 bg-gray-200 animate-shimmer h-8 rounded mb-1"
                >
                    {Array(12)
                        .fill(0)
                        .map((_, j) => (
                            <span key={j} className="bg-gray-300 h-6 rounded" />
                        ))}
                </div>
            ))}
        </>
    )
}
