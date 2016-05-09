/**
 * Created by spartaksun on 5/9/16.
 */
'use strict';
var CheckLink = React.createClass({
    render: function() {
        // This takes any props passed to CheckLink and copies them to <a>
        return <a {...this.props}>{'√ '}{this.props.children}</a>;
    }
});

ReactDOM.render(
    <CheckLink href="/checked.html" title="Test title">
        Click here! <span>test</span>
    </CheckLink>,
    document.getElementById('example')
);