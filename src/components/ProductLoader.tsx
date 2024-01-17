import ContentLoader from "react-content-loader"

export default function ProductLoader() {
    return (
        <ContentLoader
            speed={2}
            width={270}
            height={420}
            viewBox="0 0 270 420"
            backgroundColor="#d1d1d1"
            foregroundColor="#c0bfbf"
            animate={true}
        >
            <rect x="19" y="18" rx="12" ry="12" width="212" height="210" />
            <rect x="18" y="245" rx="12" ry="12" width="212" height="50" />
        </ContentLoader>
    )
}
