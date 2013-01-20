var util = require('util')

function FieldDescriptor(type, name, index) {
  this._type = type
  this._name = name
  this._index = index
  this._isOptional = false
  this._isRepeated = false
  this._options = {}
}
module.exports = FieldDescriptor


FieldDescriptor.prototype.inspect = function () {
  return util.inspect({
    name: this._name,
    fieldType: this._isOptional ? 'optional' : this._isRepeated ? 'repeated' : 'required',
    protoType: this._type,
    options: this._options
  }, false, null)
}


FieldDescriptor.prototype.getType = function () {
  return this._type
}


FieldDescriptor.prototype.getName = function () {
  return this._name
}


FieldDescriptor.prototype.getIndex = function () {
  return this._index
}


FieldDescriptor.prototype.setOptional = function (isOptional) {
  this._isOptional = isOptional
  return this
}


FieldDescriptor.prototype.isOptional = function () {
  return this._isOptional
}


FieldDescriptor.prototype.setRequired = function (isRequired) {
  this._isRequired = isRequired
  return this
}


FieldDescriptor.prototype.isRequired = function () {
  return this._isRequired
}


FieldDescriptor.prototype.setRepeated = function (isRepeated) {
  this._isRepeated = isRepeated
  return this
}


FieldDescriptor.prototype.isRepeated = function () {
  return this._isRepeated
}


FieldDescriptor.prototype.addOption = function (name, value) {
  this._options[name] = value
  return this
}


FieldDescriptor.prototype.getOption = function (name) {
  return this._options[name]
}