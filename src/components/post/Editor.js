import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

export default function Editor({ value, onChange }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'font', 'size', 'script', 'header'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }, 'code-block'],
      ['indent', 'list', 'direction', 'align', 'link', 'image', 'video', 'formula', 'clean'],
    ],
  };
  return (
    <div className="content">
      <ReactQuill placeholder="Write Something..." value={value} theme={'snow'} onChange={onChange} modules={modules} />
    </div>
  );
}
Editor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
