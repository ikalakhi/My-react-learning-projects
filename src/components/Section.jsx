export default function Section({ titel, children, ...props}) {
    return(
        <section {...props}>
            <h1>{titel}</h1>
            {children}
        </section>
    );
}