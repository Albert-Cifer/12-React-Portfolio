export default function Project({ title, description, github, deployed }) {
    return (
        <div>
        <h1>{title}</h1>
        <p>
            {description}
            <br />
            <a href={github} target="_blank">GitHub</a>
            <br />
            <a href={deployed} target="_blank">Deployed</a>
        </p>
        </div>
    );
    }