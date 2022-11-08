import styles from './someExampleComponent.module.scss';

type SomeExampleComponentProps = {

}

export default function SomeExampleComponent(props: SomeExampleComponentProps) {

    return (
        <div className={styles.container}>
            <h1>Header</h1>
            <p>My supercool component</p>
        </div>

    )

};
