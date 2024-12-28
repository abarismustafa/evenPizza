
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const MsWordEditer = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = useMemo(
    () => ({
      readonly: false, // Allows editing
      placeholder: placeholder || 'Start typing...',
      toolbarSticky: true, // Keep toolbar sticky
      showCharsCounter: true, // Show character counter
      showWordsCounter: true, // Show word counter
      showSelectionSource: true, // Show image insertion button
      askBeforePaste: true, // Ask before pasting content
      buttonDefaultWidth: 50, // Set button size
      theme: 'light', // Set the theme (light/dark)
      height: 400, // Editor height
      toolbar: [
        ['bold', 'italic', 'underline', 'strikethrough'], // Basic formatting
        ['superscript', 'subscript'],
        ['align', 'alignLeft', 'alignCenter', 'alignRight'],
        ['ul', 'ol', 'outdent', 'indent'],
        ['image', 'table', 'link', 'video'],
        ['hr', 'symbol', 'font', 'fontsize'],
        ['undo', 'redo'],
      ],
      uploader: {
        insertImageAsBase64URI: true, // Insert image as Base64 (for simple image pasting)
      }
    }),
    [placeholder]
  );

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={newContent => setContent(newContent)} // Save content when focus is lost
      onChange={newContent => {}}
    />
  );
};

export default MsWordEditer;
