import ContentLoader from "react-content-loader"

export default function InfoLittleCardLoader() {
    return <ContentLoader
        speed={2}
        width={480}
        height={167}
        viewBox="0 0 480 167"
        backgroundColor="#d1d1d1"
        foregroundColor="#c0bfbf"
        animate={true}
    >
        <rect x="0" y="0" rx="15" ry="15" width="480" height="167" />
    </ContentLoader>
}


