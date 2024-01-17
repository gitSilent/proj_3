import ContentLoader from "react-content-loader"

export default function GalleryLoader() {
    return <ContentLoader
        speed={2}
        width={251}
        height={251}
        viewBox="0 0 251 251"
        backgroundColor="#d1d1d1"
        foregroundColor="#c0bfbf"
        animate={true}
    >
        <rect x="0" y="0" rx="15" ry="15" width="251" height="251" />
    </ContentLoader>

}


