import ContentLoader from "react-content-loader"

export default function InfoCardLoader() {
    return <ContentLoader
        speed={2}
        width={680}
        height={359}
        viewBox="0 0 680 359"
        backgroundColor="#d1d1d1"
        foregroundColor="#c0bfbf"
        animate={true}
    >
        <rect x="0" y="0" rx="15" ry="15" width="680" height="359" />
    </ContentLoader>
}


