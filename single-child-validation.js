/**
 * Created by spartaksun on 5/9/16.
 */
var MyComponent = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired,
        myProp: React.PropTypes.array,
        myProp2: React.PropTypes.string
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
    <MyComponent myProp={'tytytyty'} myProp2={['kkkk', 4,5,6]}>
        <div>ttt</div>
    </MyComponent>,
    document.getElementById('example')
);