var path = require('node:path');
const BaseController = require('./BaseController.js');
var FILES_DIR = path.join(process.cwd(), 'files')

class FileController extends BaseController {
  constructor(fileService) {
    super();
    // this.fileService = fileService;
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/*file', this.downloadFile.bind(this));
}

  async uploadFile(req, res) {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
    //   const result = await this.fileService.uploadFile(file);
      return res.status(200).json({ message: 'File uploaded successfully', data: result });
    } catch (error) {
      return res.status(500).json({ message: 'Error uploading file', error: error.message });
    }
  }

  async downloadFile(req, res) {
    try {
      const fileName = req.params.file[0];
      return res.download(FILES_DIR + '/' + fileName);
    } catch (error) {
      return res.status(500).json({ message: 'Error downloading file', error: error.message });
    }
  }
}

module.exports = new FileController().router;