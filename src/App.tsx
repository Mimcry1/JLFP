<diff>
      @@ -4,7 +4,7 @@
     processedResponse = processedResponse.replace(/(\n\s*\d+\.\s+.+?)(\n|$)/g, '$1\n\n$2');
 
     // 3. Ensure double newlines between paragraphs.
-    processedResponse = processedResponse.replace(/\n{2,}/g, '\n\n');
+    processedResponse = processedResponse.replace(/\n\n+/g, '\n\n');
 
     // 4. Ensure bullet points start on a new line and have a space after the hyphen.
     processedResponse = processedResponse.replace(/^-/gm, '\n- ');
    </diff>
