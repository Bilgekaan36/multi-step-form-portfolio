import * as React from 'react';

import { cn } from '@/lib/utils'; // Utility for conditional classNames

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    // Ref for the textarea DOM element
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

    // Automatically adjust the height based on the content
    const handleInput = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = 'auto'; // Reset height first
        textarea.style.height = textarea.scrollHeight + 'px'; // Set the height based on scrollHeight
      }
    };

    return (
      <textarea
        className={cn(
          'flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none',
          className
        )}
        ref={(el) => {
          textareaRef.current = el;
          if (typeof ref === 'function') {
            ref(el);
          } else if (ref) {
            // @ts-ignore
            (ref as React.MutableRefObject<HTMLTextAreaElement>).current = el;
          }
        }}
        onInput={handleInput} // Call auto-resize logic on input change
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
