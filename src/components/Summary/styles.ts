import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block; // p fazer o margin funcionar (por padrão é inline)
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    & .highlight-background {
        background: var(--green);
        color: #FFF;
    }
`
