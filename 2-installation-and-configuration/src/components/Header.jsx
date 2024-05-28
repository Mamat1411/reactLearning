// eslint-disable-next-line react/prop-types
export default function Header({ author }) {
    // Ternary Operator Implementation for Props Default Value
    return (<h1>Belajar React Bareng {author ? author : "Pak Dhika"}🚀</h1>);
}
