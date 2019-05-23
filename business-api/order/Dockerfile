# Dockerfile - this is a comment. Delete me if you want. 
FROM python:3.7.3
 
COPY . /app 
WORKDIR /app
RUN chmod 644 order-api.py
RUN pip install --trusted-host pypi.python.org -r requirements.txt 
CMD ["python", "order-api.py"]
 #ENTRYPOINT ["python"] 
# EXPOSE 5000

# CMD ["flask", "run", "-h", "0.0.0.0"]
