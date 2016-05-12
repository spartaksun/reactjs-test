/**
 * Created by spartaksun on 5/11/16.
 */

var FieldChangeMixin = React.createMixin({
    handleChange: function (event) {
        this.setState({value: event.target.value.substr(0, 20)});
    }
});

var MyForm = React.createClass({
    render: function () {
        return <form method={this.props.method}>
            {this.props.children}
        </form>;
    }
});

var MyTextInput = React.createClass({
    mixins: [FieldChangeMixin],
    getInitialState: function () {
        return {value: 'Hello!'};
    },
    render: function () {
        return (
            <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
            />
        );
    }
});

var MySelect = React.createClass({
    getInitialState: function () {
        return {value: ['B', 'C']}
    },
    render: function () {
        return <select multiple={true}>
            <option value="A">Apple</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
        </select>;
    }
});

var MyTextArea = React.createClass({
    mixins: [FieldChangeMixin],
    getInitialState: function () {
        return {value: 'Test text'};
    },
    render: function () {
        return <textarea name="description" value={this.state.value}
                         onChange={this.handleChange} />;
    }
});

ReactDOM.render(
    <MyForm method="post">
        <p><MyTextInput /></p>
        <p><MySelect /></p>
        <p><MyTextArea /></p>
    </MyForm>,
    document.getElementById('example')
);