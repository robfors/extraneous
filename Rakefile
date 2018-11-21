task :build do
  files = []
  files << "resources/base64-js/base64js.min.js"
  files << "lib/extraneous.js"
  files << "lib/extraneous/code.js"
  files << "lib/extraneous/interpreter.js"
  files << "lib/extraneous/module.js"
  files << "lib/extraneous/source.js"
  files << "lib/js_interpreter.js"
  js_code = ""
  files.each { |file| js_code += File.read(file) + "\n" }
  File.write('bin/extraneous.js', js_code)
end