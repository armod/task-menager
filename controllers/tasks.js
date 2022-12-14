const Task = require('../models/Task')
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({})
    // res.status(200).json({ tasks })
    // res.status(200).json({ tasks, amount: tasks.length })
    res
      .status(200)
      .json({ success: true, data: { tasks, nbHits: tasks.length } })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
  // res.send('Get All Task')
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
      return res.status(404).jeson({ msg: `No task with id: ${taskID}` })
    }
    res.status(200).json({ task })
    // lub
    // res.status(200).send()
    // lub
    // res.status(200).json({ task: null, status: 'success' })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
  // res.send('Delete task')
}

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) {
      return res.status(404).jeson({ msg: `No task with id: ${taskID}` })
    }
    res.status(200).json({ id: taskID, data: req.body })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
  // res.send('Update task')
}

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask }
