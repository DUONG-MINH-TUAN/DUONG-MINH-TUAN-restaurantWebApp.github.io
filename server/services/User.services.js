
// Đăng ký người dùng mới
exports.signup = async (req, res) => {
    try {
      const { username, password, email } = req.body;
  
      // Kiểm tra xem người dùng đã tồn tại hay chưa
      const existingUser = await prisma.user.findUnique({
        where: { email }
      });
  
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Mã hóa mật khẩu
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Tạo người dùng mới
      const newUser = await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
          email
        }
      });
  
      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Đăng nhập người dùng
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Tìm người dùng theo email
      const user = await prisma.user.findUnique({
        where: { email }
      });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // So sánh mật khẩu
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Tạo JWT token
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token, message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };