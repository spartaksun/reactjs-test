/**
 * Created by spartaksun on 5/9/16.
 */
var MyComponent = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired
    },

    render: function () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

});

ReactDOM.render(
    <MyComponent>
        <div>ttt</div>
        <div>ttt2</div>
    </MyComponent>,
    document.getElementById('example')
);