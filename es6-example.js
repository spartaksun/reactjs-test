/**
 * Created by spartaksun on 5/9/16.
 */
class MyTestComponent extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

ReactDOM.render(
    <MyTestComponent name={'Alex'} />,
    document.getElementById('example')
);