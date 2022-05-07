import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;

    align-items: center;
    justify-content: space-between;

    header {
        width: 100%;

        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        div.buttons {
            display: flex;
            width: 15rem;
            margin: 1rem 0;

            border-radius: 0.3rem;
            overflow: hidden;

            button {
                width: 100%;
                padding: 0.5rem 1rem;

                font-weight: 500;
                border: none;

                transition: filter 0.2s;

                &.confirm-button {
                    background: var(--green);
                    color: var(--background-sidebar);
                }

                &.reset-button {
                    background: var(--red);
                    color: var(--text);
                }

                &:hover {
                    filter: brightness(0.7);
                }
            }
        }
    }
`
