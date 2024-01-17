import ContentLoader from "react-content-loader"

export default function ProductImageLoader() {
    return <ContentLoader
        speed={2}
        width={200}
        height={200}
        viewBox="0 0 200 200"
        backgroundColor="#d1d1d1"
        foregroundColor="#c0bfbf"
        animate={true}
    >
        <rect x="0" y="0" rx="15" ry="15" width="200" height="200" />
    </ContentLoader>
}


